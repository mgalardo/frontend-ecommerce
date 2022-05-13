import React from 'react'
import Product from './Product'
import UserPopup from './UserPopup'
import ProductsApi from '../api/ProductsApi'
import Modal from "react-bootstrap/Modal";

export default class App extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            products: [
            ],
            showSignModal: false,
            user: null
        }

        this.openPopup = this.openPopup.bind(this)
        this.closePopup = this.closePopup.bind(this)

    }

    async componentDidMount () {
        if (window.localStorage.getItem('user')) {
            this.setState({ user: JSON.parse(window.localStorage.getItem('user')) })
        }

        const products = await ProductsApi.getProducts()
        this.setState({ products })
    }

    openPopup () {
        this.setState({ showSignModal: true })
    }

    closePopup () {
        this.setState({ showSignModal: false })
    }

    render () {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Lojinha Online</a>
                        <form class="d-flex">
                            <button class="btn btn-outline-success" type="submit">Carrinho</button>
                            { !this.state.user ?<button onClick={this.openPopup} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Entrar/Crie sua conta
                            </button> : 'Bem vindo, ' + this.state.user.name}
                        </form>
                    </div>
                </nav>

                <Modal show={this.state.showSignModal}>
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.closePopup}>Fechar</button>
                    <UserPopup></UserPopup>
                </Modal>

                { this.state.products.map((product, index) => {
                    return <Product key={index} productInfo={product}></Product>
                }) }
            </div>
        )
    }
}