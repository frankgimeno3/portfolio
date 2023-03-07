import colornaut from "../assets/colornaut.png"
import "../App.css"

function Portfolio() {
    return(
        <div className="mainComponent">
            <section className="boxcontainer">
                <h1>My Projects</h1>
                <h2>Colornauts</h2>
                <img src={colornaut} alt="colornaut screenshot" className="colornautsimg"/>
                <p> Colornauts is a platform videogame in which you player, a clor changing astronaut, has to survive for one minute in a hostile environment</p>
                <p> It's a project based in canvas, displaying basic JS functionalities</p>
                <a href="https://frankgimeno3.github.io/Robernauts/">Click here to play Colornaut</a>
            </section>
        </div>
    );
}

export default Portfolio;