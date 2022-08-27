import "./styles/Inicio.css"
export function Menu() {
    const handleOption1=(e) =>{
        e.preventDefault()
        console.log("boton1")

    }
    const handleOption2=(e) =>{
        e.preventDefault()
        console.log("boton2")

    }
    const handleOption3=(e) =>{
        e.preventDefault()
        console.log("boton3")

    }
    const options= {
        option1: "Servicios",
        option2: "Costos",
        option3: "Agenda"
    };

 

    return(
    <section className="menu-secc">            
            <button onClick={handleOption1} className="optn_menu">{options.option1}</button>
            <button onClick={handleOption2} className="optn_menu">{options.option2}</button>
            <button onClick={handleOption3}className="optn_menu">{options.option3}</button>
    </section>
 
    )
}
