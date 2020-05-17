import React from 'react'
import Main from '../Templates/Main'
import './Home.css'


function Home() {
    return (
        <Main>
            <i className="fa login fa-user fa-3x" />
            <div className="container">
                <form>
                    <div class="form-group">
                        <input 
                        for="username"
                        class="form-control"
                        type="name"
                        name="username"
                        placeholder="Digite seu nome de usuário"
                         />
                    </div>
                    <div class="form-group">
                        <input
                        for="email"
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        />
                    </div>
                    <button 
                    type="button" 
                    class="btn btn-dark btn-block mb-4"
                    >Login</button>
                    <a 
                    href="/register" 
                    class="badge badge-info mt-4"
                    >Ainda não possui uma conta? Registre-se</a>
                </form>
           </div>
        </Main>
    )
}

export default Home
        