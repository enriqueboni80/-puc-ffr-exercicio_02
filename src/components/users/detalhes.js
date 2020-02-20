import React, { Component } from 'react'

class UserDetalhes extends Component {


    constructor(props) {
        super(props)
        this.state = {
            nome: ''
        }
    }

    componentDidMount() {
        document.title = "User details"
        this.setState({ nome: this.props.match.params.nome })
    }

    render() {
        console.log()
        return (
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Usuários</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Detalhes dos usuários</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>Detalhes dos Usuários</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    {this.state.nome}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default UserDetalhes