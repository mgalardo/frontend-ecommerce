import React from 'react'
export default class Post extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            comments: [
            ],
            newCommentText: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState({ comments: [
            ...this.state.comments,
            { text: this.state.newCommentText }
        ], newCommentText: ''})
    }

    handleTextChange (event) {
        this.setState({ newCommentText: event.target.value })
    }

    render () {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{ this.props.productInfo.name }</h5>
                    <p class="card-text">{ this.props.productInfo.description }</p>
                    <p class="card-text">{ this.props.productInfo.price }</p>
                    <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
                </div>
            </div>
        )
    }
}