import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'



class MontaTabela extends Component {

    constructor(props){
        super(props)
    }

    delete = (id) => {
        this.props.apagarItem(id)
    }
    
    render() {
        return(
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Idade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listaUsuarios.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>{user.idade}</td>
                                    <td>
                                        <ul>
                                            <li onClick={() => this.delete(user.id)}>Deletar</li>
                                            <li><Link to={`/users/${user.nome}`}>Detalhes</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}



export default MontaTabela