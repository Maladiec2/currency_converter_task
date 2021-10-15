import React, { Component } from 'react'
import Axios from 'axios'

export class LoginPage extends Component {
    state = {
        inputId: '',
        inputPass: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            inputId: '',
            inputPass: '',
            user: {
                id: '',
                pass: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    componentDidMount() {

    }

    userObj() {
        this.setState({
            user: {
                id: this.state.inputId,
                pass: this.state.inputPass
            }
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        this.userObj();
        setTimeout(() => {
            Axios.post('http://localhost:5000/users/auth', this.state.user)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        }, 10);
    }

    updateInput(event) {
        switch (event.target.name) {
            case 'id':
                this.setState({ inputId: event.target.value });
                break;
            case 'password':
                this.setState({ inputPass: event.target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div style={cnvStyle} >
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input placeholder="Login id" name="id" type="text" value={this.state.inputId} onChange={this.updateInput} />
                    </label>
                    <br />
                    <label>
                        <input placeholder="Password" name="password" type="password" value={this.state.inputPass} onChange={this.updateInput} />
                    </label>
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

const cnvStyle = {
    borderRadius: '5px',
    border: '2px solid #ccc',

    backgroundColor: '#f4f4f4',

    textAlign: "center",
    paddingBottom: '30px'
}

export default LoginPage