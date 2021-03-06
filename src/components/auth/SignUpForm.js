import React from 'react';
import { Redirect } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';
import { signUp, passwordsCheckError } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import 'tachyons';
import "./SignUp.css"

var buttonStyle= {
  "fontFamily": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#006d77",
  "background":"none",
  "borderColor":"#006d77",
  "float":'left'
}

class SignUpForm extends React.Component {
  state = {
      alias:"",
      email:"",
      password:"",
      confirmedPassword:"",
  }

  validation = () => { 
    if( this.state.password !== this.state.confirmedPassword ) {
      this.props.passwordsCheckError(this.state.password, this.state.confirmedPassword);
      return false;
    }

    return true;
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    if( this.validation() ){
      this.props.signUp(this.state);
    }
  }

  handleChange = (e) => {
      this.setState({ [e.target.id] : e.target.value });
  }

    
  render(){

    const {  authError, auth } = this.props;

    if(auth.uid && !auth.verifiedEmail) return <Redirect to="/verifyEmail"/>
    
    return(
      <div className="flex flex-column items-end w-100 " >
        <div className="formInputs fl w-25 flex flex-column items-end ma6 mt1"> 
        
            <p className="ma1 f3 mb4 titleStyle"> Inregistrare </p>

            <div className="w-100 inputsStyle">
              <TextInput  id="alias" label="Nume Utilizator" type="text" onChange={(e) => this.handleChange(e) }/>
              <TextInput  id="email" label="Email" type="email" onChange={(e) => this.handleChange(e) }/> 
              <TextInput id="password" label="Parola" type="password"  onChange={(e) => this.handleChange(e) } />
              <TextInput  id="confirmedPassword"  label="Confirma Parola" type="password" onChange={(e) => this.handleChange(e) } />
            </div>
            
            <Button style={ buttonStyle } node="button" waves="light" onClick={ this.handleSubmit } >
              Inregistrare cont
            </Button>
            
            {
              authError
              ? <p className="ma1 f4 mb4 red-text montSerrat"> {authError} </p> 
              : ""
            }
            
        </div>
        
      </div>
    );
          
  }
}

const mapStateToProps = ( state ) =>{
  return{
    auth: state.firebase.auth, 
    authError: state.auth.authError
  }
}
const mapDispathToProps = (dispatch) => {
  return{
    signUp: (newUser) => { dispatch(signUp(newUser)); },
    passwordsCheckError: (password, confirmedPassword) => { dispatch( passwordsCheckError(password, confirmedPassword));}
  }
}

export default connect(mapStateToProps, mapDispathToProps)(SignUpForm);
