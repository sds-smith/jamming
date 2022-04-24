import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        if (e.target.registrationStatus.value === 'reg') {
            this.props.onLogin()
        } else {
            this.props.toggle()
        }
    }

    render() {
        return (
            <div className='Login'>
                <div className='formContainer'>
                    <h2 className='loginMessage'>Assemble<span className='highlight'>the</span>Jams is registered in Development mode with Spotify.</h2>
                    <h2 className='loginMessage'>In order to demo the app, you must be registered as a user.</h2>
                    <h3 className='loginMessage'>For more information on this app, please see the <a id='readme' href='https://github.com/sds-smith/assemble-the-jams#readme' >README</a></h3>
                    <form className='LoginForm' /*method='post'*/ name='loginForm' onSubmit={this.handleSubmit}>
                        <div className='regBtn'>
                            <input type='radio' name='registrationStatus' id='not_reg' value='not_reg' />
                            <label for='not_reg' id='notRegLabel'>I am requesting access for the first time</label>
                        </div>
                        <div className='regBtn'>
                            <input type='radio' name='registrationStatus' id='reg' value='reg' />
                            <label for='reg' id='regLabel'>I am a registered user of this app</label>     
                        </div>
                        <button className='LoginButton' >SUBMIT </button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login;