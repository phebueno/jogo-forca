import arrForcas from "./components/Jogo/enderecoImagensForca.js";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import palavras from "./palavras";
import alfabeto from "./components/Letras/alfabeto.js";
import { useState } from "react";
export default function App() {
  
  const [arrPalavraEscondida, setArrPalavraEscondida] = useState([]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState(alfabeto);
  //A variável arrForcas recebe o valor de tentativas atual de erros 
  //do useState para definir qual imagem enviar
  const [tentativas, setTentativas] = useState(0);
  const [acertos, setAcertos] = useState(0);

  function escolherPalavra(palavras){
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setArrPalavraEscondida(palavraAleatoria.split(''));
    setLetrasEscolhidas([]);
    setAcertos(0);
    setTentativas(0);
  }
  
  //Atualiza o array de letras que já foram escolhidas:
  function escolherLetra(letra){
    setLetrasEscolhidas([...letrasEscolhidas,letra])
    if(!arrPalavraEscondida.includes(letra)){
      setTentativas(tentativas+1); //errou
      if((tentativas+1)===6) setLetrasEscolhidas(alfabeto); //errou todas as vezes
    } 
    else{
      setAcertos(acertos+1); //acertou
      if((acertos+1)===arrPalavraEscondida.length) setLetrasEscolhidas(alfabeto); //acertou todas as vezes
    } 
}

  return (
    <div className="App">
      <Jogo imgForca={arrForcas[tentativas]} palavras={palavras} arrPalavraEscondida={arrPalavraEscondida} escolherPalavra={escolherPalavra} letrasEscolhidas={letrasEscolhidas} acertos={acertos} tentativas={tentativas}/>
      <footer>
        <Letras letrasEscolhidas={letrasEscolhidas} escolherLetra={escolherLetra} arrPalavraEscondida={arrPalavraEscondida}/>
        <div className="chute">
          <input type="text" />
        </div>
      </footer>
    </div>
  );
}
