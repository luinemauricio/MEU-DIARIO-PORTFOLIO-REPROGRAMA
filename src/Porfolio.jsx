import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function Porfolio() {
  return (
    <div className="main">
      <Header title="Meu Portfólio Reprograma" />
      <About
        image="./src/images/imagem 1_luine.jpg"
        title="Hello Word, sou Luine!"
        text="Uma mulher preta, formada em Administração com ênfase em Comércio 
        Exterior e alguns anos de carreira, que se apaixonou pela área de programação
         e esta iniciando uma jornada desafiadora e apaixonante pelo mundo Dev!"
      />
      <hr></hr>
      <Skills title="Projetos feitos na reprograma" />
      <Projects />
      <Skills title="Projetos no GitHub" />
      <div className="repositories-container">
        <Repositories />
      </div>
      <Footer text="Feito por Luine Mauricio" />
    </div>
  );
}

export default Porfolio;