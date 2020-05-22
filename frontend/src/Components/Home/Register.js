import React from 'react'
import Main from '../Templates/Main'
import './Register.css'

function Register() {
    return (
        <Main>
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="username"><strong>Username</strong></label>
                        <input 
                        for="username"
                        class="form-control register"
                        type="name"
                        name="username"
                        placeholder="Digite seu nome de usuário"
                         />
                    </div>
                    <div class="form-group">
                        <label for="email"><strong>Endereço eletronico</strong></label>
                        <input
                        for="email"
                        class="form-control register"
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        />
                    </div>
                    <button 
                    type="button" 
                    class="btn btn-dark btn-block mb-4"
                    >Registrar</button>
                </form>
            </div>
        </Main>
        
    )
}


export default Register;
