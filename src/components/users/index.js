import React, { Component } from 'react'
import MontaTabela from './montaTabela'

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    apagarItem = (id) => {
        let filtro = this.state.users.filter((element) => {
            return (element.id !== id)
        })
        this.setState({ users: filtro })
    }

    componentDidMount() {
        let users = [{
            'id': 1,
            'nome': 'Jose da Silva',
            'email': 'jose@gmail.com',
            'idade': 40
        }, {
            'id': 2,
            'nome': 'Ayrton Senna',
            'email': 'ayrton@senna.com',
            'idade': 50
        }, {
            'id': 3,
            'nome': 'Alan Prost',
            'email': 'alan@prost.com',
            'idade': 53
        }, {
            'id': 4,
            'nome': 'Nigel Mansel',
            'email': 'nigel@mansel.com',
            'idade': 60
        }]
        this.setState({ users: users })
    }

    render() {
        return (
            <MontaTabela listaUsuarios={this.state.users} apagarItem={this.apagarItem} />
        )
    }
}

export default Users