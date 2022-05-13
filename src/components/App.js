import React from 'react'
import Product from './Product'
import ProductsApi from '../api/ProductsApi'

export default class App extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            products: [
            ],
        }
    }

    async componentDidMount () {
        const products = await ProductsApi.getProducts()
        this.setState({ products })
    }

    render () {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Lojinha Online</a>
                        <form class="d-flex">
                            <button class="btn btn-outline-success" type="submit">Carrinho</button>
                            <button class="btn btn-outline-success" type="submit">Entrar</button>
                        </form>
                    </div>
                </nav>
                { this.state.products.map((product, index) => {
                    return <Product key={index} productInfo={product}></Product>
                }) }
            </div>
        )
    }
}