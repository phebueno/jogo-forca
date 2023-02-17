import arrForcas from "./components/Jogo/enderecoImagensForca.js";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import palavras from "./components/Jogo/palavras";
import alfabeto from "./components/Letras/alfabeto.js";
import { useState } from "react";
export default function App() {
  
  const [arrPalavraEscondida, setArrPalavraEscondida] = useState([]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState(alfabeto);
  //A variável arrForcas recebe o valor de tentativas atual de erros 
  //do useState para definir qual imagem enviar
  const [tentativas, setTentativas] = useState(0);

  function escolherPalavra(palavras){
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setArrPalavraEscondida(palavraAleatoria.split(''));
    setLetrasEscolhidas([]);
  }
  
  //Atualiza o array de letras que já foram escolhidas:
  //Se erra, soma um ao contador de contabilizar o erro também?
  function escolherLetra(letra){
    setLetrasEscolhidas([...letrasEscolhidas,letra])
    if(!arrPalavraEscondida.includes(letra)) setTentativas(tentativas+1);
}

  return (
    <div className="App">
      <Jogo imgForca={arrForcas[tentativas]} palavras={palavras} arrPalavraEscondida={arrPalavraEscondida} escolherPalavra={escolherPalavra} letrasEscolhidas={letrasEscolhidas}/>
      <footer>
        <Letras letrasEscolhidas={letrasEscolhidas} escolherLetra={escolherLetra} arrPalavraEscondida={arrPalavraEscondida}/>
        <div className="chute">
          <input type="text" />
        </div>
      </footer>
    </div>
  );
}
