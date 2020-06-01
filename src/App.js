/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GlobalStyle from './styles/global';
import { Header, Sobre, Produtos, Contato, Footer, FAQ, Form } from './styles/styles';
import api from './services/api';


function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Header></Header>
        <Sobre></Sobre>
        <Produtos></Produtos>
        <Contato></Contato>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
