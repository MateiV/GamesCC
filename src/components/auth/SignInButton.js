import React from 'react';
import {Button} from '@material-ui/core';
import 'tachyons';

var buttonStyle={
  "fontFamily": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "fontWeight": "bold",
  "color": "#D7D6D6",
  "border":"none",
  "background":"none"
}

class SignInButton extends React.Component {

  render (){
    return(
        <div className = "mt-5">
            <Button 
                variant="contained" 
                style={ buttonStyle }
                > 
              Autentificare 
          </Button>
        </div>
    );
  }
}

export default SignInButton;
