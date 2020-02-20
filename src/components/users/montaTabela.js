import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class MontaTabela extends Component {

    constructor(props) {
        super(props)
    }

    delete = (id) => {
        this.props.apagarItem(id)
    }

    render() {
        return (
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Usuários</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Lista de Usuários</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>LISTA DE USUARIOS</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Email</th>
                                                <th>Idade</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Email</th>
                                                <th>Idade</th>
                                                <th>Ações</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {this.props.listaUsuarios.map((user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.nome}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.idade}</td>
                                                        <td>
                                                            <div onClick={() => this.delete(user.id)}>Deletar</div>
                                                            <div><Link to={`/users/${user.nome}`}>Detalhes</Link></div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}



export default MontaTabela