import Axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { API_URL } from '../../Helpers';


class Login extends Component {

    state = {
        username: '',
        password: '',
        redirectChecklist: false
    }

    onBtnLogin = async () => {
        let username = this.state.username;
        let password = this.state.password;
        let dataUser = {
            username, password
        }
        try {
            const res = await Axios.post(API_URL + `login`, dataUser)
            localStorage.setItem('token', res.data.data.token)
            console.log(res.data)
            console.log(res.data.data.token)
            this.setState({redirectChecklist: true})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        if(this.state.redirectChecklist){
            return(
                <Redirect to ="/checklist"></Redirect>
            )
        }
        return (
            <div>
                <input type="text" placeholder="username" onChange={(e) => this.setState({ username: e.target.value })} />
                <br />
                <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                <br />
                <button onClick={this.onBtnLogin}>Submit</button>
                <br />
                <div>Belum punya akun ? <Link to="register">Klik disini</Link></div>
            </div>
        );
    }
}

export default Login;