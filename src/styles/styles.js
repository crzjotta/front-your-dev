import styled from 'styled-components';

export const Header = styled.header`
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  position: fixed;
  top: 0;
  z-index: 1;

  .menu li, .produtos li {
    list-style: none;
  }

  .menu ul {
    justify-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 5vw;
  }

  .menu li{
    padding: 10px;
  }

  .menu a {
    text-decoration: none;
    padding: 5px;
    color: #101010;
    font-size: 0.7em;
  }

  .menu a:active{
    color: #404040;
  }
  
  .menu a:hover {
    text-decoration: underline;
  }

  #logo {
    width: auto;
    height: 7vh;
    justify-self: flex-start;
    margin-left: 5px;
  }

  main {
    clear: both;
    display: flex;
    flex-direction: column;
  }
`;

export const Sobre = styled.section`
  clear: both;
  width: 100vw;
  height: 100vh;
  color: whitesmoke;

  #tituloSobre {
    clear: both;
    margin: 13vh 0 0 60vw;
    font-size: 10vw;
  }
  .paragrafo {
    margin: 2vw 5vw 5vw 5vw;
    font-size: 25px;
  }
`;

export const Produtos = styled.section`
  clear: both;
  width: 100vw;
  height: 100vh;
  color: whitesmoke;

  #tituloProdutos {
    clear: both;
    margin: 13vh 0 5vh 2vw;
    font-size: 10vw;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 0.9em;
    color: whitesmoke;
    margin-top: 5vh;
    padding-top: 100px;
  }

  li {
    padding: 3px 20px;
    border-width: 2px;
    border-style: solid;
    border-color: whitesmoke;
  }

  .r1 {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .r2 {
    border-color: rgba(255, 255, 255, 0.75);
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const Contato = styled.section`
  clear: both;
  height: 10vh;
  width: 100vw;
  color: whitesmoke;

  @media (max-width: 414px) {
    .contato .grid {
      display: grid;
      grid-template-columns: 2fr 2fr;
      gap: 1em;
    }
  }

  .icons {
    clear: both;
    width: 0vw;
    margin-left: 49vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  a {
    clear: both;
    padding: 30px;
    color: whitesmoke;
    font-size: 40px;
    text-decoration: none;
    transition: text-shadow 0.2s;
  }
  
  a:active, a:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

export const Footer = styled.footer`
  clear: both;
  height: 40px;
  padding: 30px;
  margin-bottom: 30px;

  #endereco {
    padding-bottom: 40px;
  }

  p {
    text-align: center;
    font-size: 0.7em;
  }

  figcaption, p {
  color: whitesmoke;
  text-align: center;
  }
`;