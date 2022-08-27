import "./styles/Inicio.css"
import inst from "./styles/imgs/Insta.png"
import face from "./styles/imgs/Fb.png"
import whats from "./styles/imgs/Wa.png"
export function Footer () {

    return(
        <footer>
            <h2 className="text-footer">Contáctanos y síguenos en redes sociales:</h2>
            <section className="icons-secc">
                <img src={inst} alt="Instagram" className="icon-1"/>
                <img src={face} alt="Facebook" className="icon-1"/>
                <img src={whats} alt="WhatsApp" className="icon-1"/>
            </section>
        </footer>
    )
}