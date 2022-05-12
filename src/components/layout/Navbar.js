import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import './Navbar.css';
import '../../assets/Fonts.css'

const NavBar = (props) =>{
    return(
        <nav className="dt w-100 border-box no-shadows pa1 ph5-ns transparentBG">
            <div className="dtc v-mid link dim w-40">
                <Link to="/" className= " pink-dark-text montSerrat big w2 h2 br-100"> <span> Video Games </span> </Link> 
            </div>

            <div className="dtc v-mid w-60 tr ">
                <ul  className="right">
                    <li><NavLink to="/games" className="greenText">Jucatori</NavLink></li>
                    <li><NavLink to="/matches" className="greenText"> Jocuri</NavLink></li>
                    <li><NavLink to="/stats" className="greenText"> Statistici Generale</NavLink></li>
                    <li> <NavLink to="/profile" className="pink-dark-text b poiret">{ props.profile.alias }</NavLink></li>
                    <li onClick = {props.signOut}> 
                        <NavLink to="/" className="greenText">Log out</NavLink> 
                    </li>
                </ul>
            </div>
        </nav>
    );   
}

const mapStateToProps = ( state ) => {
    return{
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{ 
    return{
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (NavBar);