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

  #logo {
    left: 29px;
    top: 13px;
    width: auto;
    height: 7vh;
    justify-self: flex-start;
  }

  ul {
    justify-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 5vw;
  }

  li{
    padding: 10px;
    list-style: none;
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

  main {
    clear: both;
    display: flex;
    flex-direction: column;
  }
`;

export const Welcome = styled.section`
  clear: both;
  width: 100vw;
  height: 100vh;
  background-color: #E01F27;
  color: whitesmoke;

  .titulo {
    width: 1142px;
    height: 227px;
    left: 297px;
    top: 246px;
    font-size: 90px;
    line-height: 107px;
    color: #ffffffff;
  }

  .subtitulo {
    width: 1142px;
    height: 129px;
    left: calc(50% - 1142px/2 + 148px);
    top: calc(50% - 129px/2 + 52.5px);
    font-size: 36px;
    line-height: 43px;
    color: #ffffffff;
  }

  .merecedor {
    left: 5%;
    right: 69.72%;
    top: 53.82%;
    bottom: 2.06%;
  }

  button {
    width: 381px;
    height: 72px;
    left: 678px;
    top: 745px;
  }

  .imgBg {
    width: 1043px;
    height: 929px;
    left: 102px;
    top: 91px;
    background-image: '../assets/images/bg/trans_digital_red.svg';
  }

`;

export const Sobre = styled.section`
  clear: both;
  width: 100vw;
  height: 100vh;
  color: #EEEEEE;

  .titulo {
    width: 927.49px;
    height: 101px;
    left: 86px;
    top: 123px;
    font-size: 85.3521px;
    line-height: 101px;
    color: #000000;
  }
  .paragrafo1 {
    width: 770px;
    height: 231px;
    left: 95px;
    top: 250px;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
  }

  .paragrafo2 {
    width: 748px;
    height: 187px;
    left: 95px;
    top: 485px;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
  }

  button {
    width: 313px;
    height: 71.82px;
    left: 563px;
    top: 749px;
  }

  .visionario {
    width: 380.75px;
    height: 448.56px;
    left: 975px;
    top: 353px;
  }

  .imgBg {
    width: 1043px;
    height: 940px;
    left: 102px;
    top: 0px;
    background-image: '../assets/images/bg/trans_digital_grey.svg';
  }
`;

export const Produtos = styled.section`
  clear: both;
  width: 100vw;
  height: 100vh;
  background: #E01F27;

  .titulo {
    left: 3.75%;
    right: 66.6%;
    top: 4.89%;
    bottom: 70.64%;
    font-weight: bold;
    font-size: 91.1134px;
    line-height: 108px;
    color: #ffffffff;
  }

  .boxEasy {
    width: 350px;
    height: 514px;
    left: 110px;
    top: 334px;
    background: #FFFFFF;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .tituloEasy {
    width: 350px;
    height: 79.65px;
    left: 110px;
    top: 382.09px;
    font-weight: 500;
    font-size: 45px;
    line-height: 50px;
    color: #C81E24;
  }

  .textoEasy {
    width: 269px;
    height: 108.21px;
    left: 150px;
    top: 541.39px;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    color: #C81E24;
  }

  .botaoEasy {
    width: 256px;
    height: 56px;
    left: 157px;
    top: 748px;
  }

  .boxHard {
    width: 350px;
    height: 514px;
    left: 499px;
    top: 334px;
    background: #FFFFFF;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .tituloHard {
    width: 350px;
    height: 79.65px;
    left: 499px;
    top: 382.09px;
    font-weight: 500;
    font-size: 45px;
    line-height: 50px;
    color: #C81E24;
  }

  .textoHard {
    width: 269px;
    height: 108.21px;
    left: 539px;
    top: 541.39px;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    color: #C81E24;
  }

  .botaoHard {
    width: 256px;
    height: 56px;
    left: 546px;
    top: 748px;
  }

  .boxCustom {
    width: 350px;
    height: 391px;
    left: 882px;
    top: 334px;
    background: #FFFFFF;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .tituloCustom {
    width: 350px;
    height: 60.59px;
    left: 882px;
    top: 370.58px;
    font-weight: 500;
    font-size: 45px;
    line-height: 50px;
    color: #C81E24;
  }

  .textoCustom {
    width: 269px;
    height: 32.01px;
    left: 922px;
    top: 510.06px;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    color: #C81E24;
  }

  .botaoCustom {
    width: 256px;
    height: 64.02px;
    left: 935px;
    top: 620.96px;
  }

  .botaoMelhoria {
    width: 349px;
    height: 100px;
    left: 882px;
    top: 748px;
  }

  .imgBg {
    width: 1043px;
    height: 940px;
    left: 107px;
    top: 0px;
    background: '../assets/images/bg/trans_digital_red.svg';
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

export const FAQ = styled.section`
  width: 1440px;
  height: 940px;
  left: 0px;
  top: 0px;
  background: #EEEEEE;

  .tituloFAQ {
    left: 4.38%;
    right: 61.53%;
    top: 5.53%;
    bottom: 60.14%;
    font-weight: bold;
    font-size: 91.1134px;
    line-height: 108px;
    color: #E01F27;
  }

  .q1 {
    width: 422.95px;
    height: 239.62px;
    left: 506.03px;
    top: 87px;
  }

  .q2 {
    width: 422.95px;
    height: 239.62px;
    left: 978px;
    top: 87px;
  }

  .q3 {
    width: 422.95px;
    height: 239.62px;
    left: 40px;
    top: 449px;
  }

  .q4 {
    width: 422.95px;
    height: 239.62px;
    left: 506px;
    top: 449px;
  }

  .q5 {
    width: 422.95px;
    height: 239.62px;
    left: 972px;
    top: 449px;
  }

  .botaoPlanos {
    width: 505px;
    height: 100px;
    left: 63px;
    top: 807px;
  }

  .botaoMsg {
    width: 508px;
    height: 100px;
    left: 879px;
    top: 807px;
  }

  .imgBgFAQ {
    width: 1043px;
    height: 940px;
    left: 102px;
    top: 0px;
    background: '../assets/images/bg/trans_digital_grey.svg';
  }
`;

export const Form = styled.section`

  .tituloForm {
    width: 567px;
    height: 73px;
    left: 92px;
    top: 63px;
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
  }

  .nome {
    width: 226px;
    height: 31px;
    left: 92px;
    top: 173px;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
  }

  .campoNome {
    width: 778px;
    height: 74px;
    left: 92px;
    top: 222px;
    background: #FFFFFF;
    border-radius: 10px;
  }

  .email {
    width: 226px;
    height: 31px;
    left: 92px;
    top: 314px;
    font-size: 32px;
    line-height: 39px;
    color: #ffffffff;
  }

  .campoEmail {
    width: 778px;
    height: 74px;
    left: 92px;
    top: 355px;
    background: #FFFFFF;
    border-radius: 10px;
  }

  .assunto {
    width: 226px;
    height: 31px;
    left: 92px;
    top: 455px;
    font-size: 32px;
    line-height: 39px;
    color: #ffffffff;
  }

  .campoAssunto {
    width: 778px;
    height: 74px;
    left: 92px;
    top: 496px;
    background: #FFFFFF;
    border-radius: 10px;
  }

  .msg {
    width: 226px;
    height: 31px;
    left: 92px;
    top: 596px;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
  }

  .campoMsg {
    width: 778px;
    height: 160px;
    left: 92px;
    top: 637px;
    background: #FFFFFF;
    border-radius: 10px;
  }

  .botaoFechar {
    left: 93.82%;
    right: 1.32%;
    top: 2.23%;
    bottom: 90.32%;
  }

  .botaoEmail {
    width: 358px;
    height: 63px;
    left: 512px;
    top: 840px;
  }

  .pessoas {
    left: 75.07%;
    right: 1.32%;
    top: 40.32%;
    bottom: 27.77%;
  }

  .imgBgForm {
    width: 1043px;
    height: 940px;
    left: 107px;
    top: 0px;
    background-image: '../assets/images/bg/trans_digital_red.svg'
  }
`;
