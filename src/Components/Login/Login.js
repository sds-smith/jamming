import React from 'react';
import './Login.css';

class Login extends React.Component {

    render() {
        return (
            <div className='Login'>
                <h2 className='loginMessage'>This app is registered in Development mode with Spotify.</h2>
                <h2 className='loginMessage'>In order to use the app, you must be explicitly added as a user.</h2>
                <h3 className='loginMessage'>You only need to request access once, but there may be a delay between requesting and gaining access</h3>
                <h3 className='loginMessage'>For more information on this app, please see the About page</h3>
                <form className='LoginForm' onSubmit={this.props.onLogin}>
                    <input className='email_input' type='email' placeholder='Enter the email address associated with your Spotify account'/>
                    <div className='regBtn'>
                        <input type='radio' name='registration' id='not_reg' value='not_reg' />
                        <label for='not_reg' id='notRegLabel'>I am requesting access for the first time</label>
                    </div>
                    <div className='regBtn'>
                        <input type='radio' name='registration' id='reg' value='reg' />
                        <label for='reg' id='regLabel'>I am a registered user of this app</label>     
                    </div>
           
                    <button className='LoginButton' >SUBMIT </button>
                </form>

            </div>
        )
    }
}

export default Login;