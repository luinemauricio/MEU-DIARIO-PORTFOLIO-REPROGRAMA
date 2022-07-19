import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Footer from "./components/Footer";
import NavLink from "./components/NavLink";

function App() {
  return (
    <div className="main">
      <Header title="Meu Diário da Reprograma" />
      <About
        image="./src/images/imagem 1_luine.jpg"
        title="Hello Word, sou Luine!"
        text="Uma mulher preta, formada em Administração com ênfase em Comércio 
        Exterior e alguns anos de carreira, que se apaixonou pela área de programação
         e esta iniciando uma jornada desafiadora e apaixonante pelo mundo Dev!"
      />
      <hr></hr>
      <Skills title="4 aprendizados na reprograma" />
      <Learning
        subtitle="Git"
        gif="https://64.media.tumblr.com/5ea71a6cdd543ccdf6e0d964e78f8b69/c23b982d0551e984-72/s640x960/652237166a2b4b317453f9c525aac53e0c7da035.gifv"
        text="Git é um sistema de controle de versão de código aberto
        distribuído que permite armazenar código, rastrear histórico de
        versão, mesclar alterações no código e reverter para versões de
        código anteriores quando necessário. Dentre seus inúmeros
        benefícios estão: controle e histórico de alterações, trabalho em
        equipe e melhora da velocidade e produtividade em equipe."
      />
      <Learning
        subtitle="HTML"
        gif="https://64.media.tumblr.com/88491a5845e7b2663f0106d8bb52a6c4/c23b982d0551e984-b7/s500x750/5911114dd186106422ca2512b60e9e98c56dd454.gifv"
        text="HTML é uma linguagem de marcação de texto, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, 
        que são utilizados para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça 
        ou atue de determinada maneira. As tags anexas podem transformar uma palavra ou imagem num 
        hiperlink, pode colocar palavras em itálico e assim por diante."
      />
      <Learning
        subtitle="CSS"
        gif="https://64.media.tumblr.com/ebbe1ce46239597f4f1f6214655ab1a6/c23b982d0551e984-bc/s500x750/89ffc5012cb2c5cb7f6e4c1243353bbfee5ce395.gifv"
        text="CSS é a abreviação de Cascading Style Sheet (folha em estilo cascata). É um mecanismo para adicionar estilo a um documento web. É aqui que 
        conseguimos dar cor e fazer a maioria das animações dos nossos projetos. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível criar um link para um arquivo CSS externo que contém os estilos."
      />
      <Learning
        subtitle="JavaScript"
        gif="https://64.media.tumblr.com/af65e0fd8448b753da0d6a8f9dd06878/c23b982d0551e984-d8/s250x400/0e7352de22115cd79c1f001d11147469d51bc21b.gifv"
        text="JavaScript é uma linguagem de programação que adiciona movimento às páginas web, além de permitir o processamento e transformação de dados enviados e recebidos. Ele permite criar conteúdos que se atualizam de forma dinâmica e animada, dando vida às aplicações que antes eram apenas estruturadas com HTML de forma estática."
      />
      <NavLink href="/portfolio.html" name="Acesse meu portfólio" />
      <Footer text="Feito por Luine Mauricio" />
    </div>
  );
}

export default App;