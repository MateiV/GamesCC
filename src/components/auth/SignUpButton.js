import React from 'react';
import {Button} from '@material-ui/core';

const signUpButtonStyle ={ 
    "fontFamily": `'Montserrat', sans-serif`,
    "fontSize": "1em",
    "fontWeight": "bold",
    "color": "#D7D6D6",
    "border":"none",
    "background":"none"
}

class SignUpButton extends React.Component {
  render (){
    return(
          <Button 
            variant="contained"
            style={signUpButtonStyle}
            > 
            Inregistrare
          </Button>
    );
  }
}

export default SignUpButton;
