import Listarpersonajes from "./listarpersonajes";


const students = [
    {
        "id": 1,
        "name": " Nombre: Meliodas",

        "genero": " Genero: M",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://imagenes-bonitas.com/wp-content/uploads/2020/09/meliodas-siete-pecados-capitales.jpg"
    },
    {
        "name": " Nombre: Diane",
        "genero": " Genero: F",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://laverdadnoticias.com/__export/1624570958004/sites/laverdad/img/2020/09/30/nanatsu_no_taizai_diez_cosas_que_los_fanaticos_no_saben_sobre_diane.jpg_1039688545.jpg"

        


    },
    {
        "name": " Nombre: Ban",
        "genero": " Genero: M",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://cdn.superaficionados.com/imagenes/nanatsu-no-taizai-personajes-ban-cke.jpg"

    },
    {
        "name": " Nombre: Escanor",
        "genero": " Genero: M",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://www.cultture.com/pics/2020/08/siete-pecados-capitales-10-piezas-de-fan-art-de-escanor-que-lo-harian-sentirse-orgulloso-4.jpg"

    },
    {
        "name": " Nombre: Merlin",
        "genero": " Genero: F",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://i.pinimg.com/originals/18/8a/08/188a08f19fa2225e03ad868ef6a5446c.png"

    }
]

const Personajes = () => (
    <>
        <nav>
                    <ul class="menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Personajes">Contenido</a></li>
                        <li><a href="/Formulario">Ingresar</a></li>
                    </ul>
                </nav>
        {
            students.map(c => <Listarpersonajes name={c.name} tipo={c.Tipo} describe={c.Describe} img={c.img} />)
        }
        <footer>
            <figure class="text-center">
                <blockquote class="blockquote">
            
                    <a href="dcsanabria71@misena.edu.co">Email<i class="fab fa-email"></i> </a><br></br>
                    <a href="https://github.com/diana0219">Github<i class="fab fa-github"></i> </a><br></br>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">Adsi:2184587</cite>
                </figcaption>
            </figure>
        </footer>
    </>
)

export default Personajes;