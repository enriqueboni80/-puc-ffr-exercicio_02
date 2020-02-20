import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuLateral extends Component {
    render() {
        return (
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">PAINEIS</div>
                            <Link to="/" class="nav-link"><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard</Link>

                            <div class="sb-sidenav-menu-heading">MENUS</div>
                            <Link to="/users" class="nav-link"><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Users</Link>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                </div>
                </nav>
            </div>
        )
    }
}

export default MenuLateral