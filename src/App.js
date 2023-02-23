import arrForcas from "./components/Jogo/enderecoImagensForca.js";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import palavras from "./palavras";
import alfabeto from "./components/Letras/alfabeto.js";
import { useState } from "react";
import Chute from "./components/Chute/Chute.js";
export default function App() {

  const [arrPalavraEscondida, setArrPalavraEscondida] = useState([]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState(alfabeto);
  //A variável arrForcas recebe o valor de tentativas atual de erros 
  //do useState para definir qual imagem enviar
  const [tentativas, setTentativas] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [chute,setChute] = useState("");

  const palavraCaracteresUnicos = arrPalavraEscondida.map(semCaracEspeciais).filter(apenasUnicos).length;

  console.log(arrPalavraEscondida);
  //Função que pega apenas caracteres únicos da palavra
  function apenasUnicos(value, index, array) {
    return array.indexOf(value) === index;
  }

  //Função que retira os caracteres especiais da string
  function semCaracEspeciais(value){
    let a = value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    return a;
  } 

  function escolherPalavra(palavras){
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setArrPalavraEscondida(palavraAleatoria.split(''));
    setLetrasEscolhidas([]);
    setAcertos(0);
    setTentativas(0);
    setChute("");
  }
  
  //Atualiza o array de letras que já foram escolhidas:
  function escolherLetra(letra){
    setLetrasEscolhidas([...letrasEscolhidas,letra])
    const arrSemEspeciais = arrPalavraEscondida.map(semCaracEspeciais); 
    if(!arrSemEspeciais.includes(letra)){
      setTentativas(tentativas+1); //errou
      if((tentativas+1)===6) setLetrasEscolhidas(alfabeto); //errou todas as vezes
    } 
    else{
      setAcertos(acertos+1); //acertou
      if((acertos+1)===palavraCaracteresUnicos) setLetrasEscolhidas(alfabeto); //acertou todas as vezes
    } 
}

  //Função de chute de palavra
  function chutar(){
    if(chute===arrPalavraEscondida.join('')){
      setAcertos(palavraCaracteresUnicos); //acertou!
    }
    else{
      setTentativas(6);
    }
    setLetrasEscolhidas(alfabeto);
}

  return (
    <div className="App">
      <Jogo imgForca={arrForcas[tentativas]} palavras={palavras} arrPalavraEscondida={arrPalavraEscondida} escolherPalavra={escolherPalavra} letrasEscolhidas={letrasEscolhidas} acertos={acertos} tentativas={tentativas} palavraCaracteresUnicos={palavraCaracteresUnicos}/>
      <footer>
        <Letras letrasEscolhidas={letrasEscolhidas} escolherLetra={escolherLetra} arrPalavraEscondida={arrPalavraEscondida}/>
        <Chute chute={chute} setChute={setChute} chutar={chutar} letrasEscolhidasNum={letrasEscolhidas.length} letrasTotaisNum={alfabeto.length}/>
      </footer>
    </div>
  );
}
