import React, { Component } from 'react'

class UserDetalhes extends Component {


    constructor(props) {
        super(props)
        this.state = {
            nome: ''
        }

    }

    componentDidMount() {
        this.setState({ nome: this.props.match.params.nome })
    }


    render() {
        console.log()
        return (
            <div>{this.state.nome}</div>
        )
    }
}

export default UserDetalhes