import { Component } from "react";


class Footer extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul class="menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Personajes">Contenido</a></li>
                        <li><a href="/Formulario">Ingresar</a></li>
                    </ul>
                </nav>
                <footer class="footer">
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <a href="dcsanabria71@misena.edu.co/">Correo<i class="fab fa-email"></i> </a><br></br>
                            <a href="https://github.com/diana0219">Github<i class="fab fa-github"></i> </a><br></br>    
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <cite title="Source Title">Adsi:2184587</cite>
                        </figcaption>
                    </figure>
                </footer>
            </>
        )
    }

}
export default Footer;