import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Helpers';


class Register extends Component {


    state = {
        email: '',
        username: '',
        password: ''
    }

    onBtnRegister = async () => {
        let email = this.state.email;
        let username = this.state.username;
        let password = this.state.password;
        let dataRegister = {
            email, username, password
        }
        try {
            await Axios.post(API_URL + `register`, dataRegister)
        } catch (err) {
            console.log('ni', err)
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                <br />
                <input type="text" placeholder="username" onChange={(e) => this.setState({ username: e.target.value })} />
                <br />
                <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                <br />
                <button onClick={this.onBtnRegister}>Submit</button>
                <div>Sudah punya akun ? <Link to="/">Klik disini</Link></div>
            </div>
        );
    }
}

export default Register;