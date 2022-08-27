import "./styles/Admin.css"
export function Admin (){
    return (
        <section>
            <h1 className="title-form">Inicia sesión</h1>
            <form className="form-container" >
                    <label for="email">Correo electrónico:</label>
                    <input
                        id="email" type="email" placeholder="admin@admin.com" />
                    <br />
                    <label for="password">Contraseña:</label>
                    <input 
                        id="password" type="password" placeholder="******" />
                    <br />
                    <p className="error-p"> </p>
                    <br />
                    <button 
                        type="submit" className="btn-form">ENTRAR</button>
                </form>
        </section>
    )
}