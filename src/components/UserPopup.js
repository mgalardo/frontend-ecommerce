import React from 'react'
import Modal from "react-bootstrap/Modal";
import UserApi from '../api/UserApi'
export default class Post extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            comments: [
            ],
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    async handleSubmit (event) {
        event.preventDefault()
        try {
            const response = await UserApi.getUser(this.state.email, this.state.password)
            // SHOULD RECEIVE AND SAVE JWT TOKEN, NOT THE USER ENTITY
            window.localStorage.setItem('user', JSON.stringify(response))
            window.location.reload()
        } catch {
            // TODO: TRATAR ERROS
            console.log('error')
        }
    }

    handleEmailChange (event) {
        this.setState({ email: event.target.value })
    }
    handlePasswordChange (event) {
        this.setState({ password: event.target.value })
    }

    render () {
        return (
            <div>
                <Modal.Header>Faça login</Modal.Header>
                <form>
                    <Modal.Body>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input onChange={this.handleEmailChange} type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <input onChange={this.handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.handleSubmit}>Entrar</button>
                    </Modal.Footer>
                </form>
            </div>
        )
    }
}