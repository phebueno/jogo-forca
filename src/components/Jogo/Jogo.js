export default function Jogo({ imgForca, palavras, arrPalavraEscondida, escolherPalavra, letrasEscolhidas, acertos, tentativas}) {
  function apenasUnicos(value, index, array) {
    return array.indexOf(value) === index;
  } 
  //Adicionar duas linhas com as condições de erro/acerto para enfiar no código abaixo: 
  const acerto = acertos===(arrPalavraEscondida.filter(apenasUnicos).length) && "acerto";
  const erro = tentativas===6 && "erro";
  return (
    <main className="jogo">
      <img data-test="game-image" src={imgForca} alt="" />
      <section className="lado-palavra">
        <button data-test="choose-word" className="botao-palavra" onClick={()=>escolherPalavra(palavras)}>Escolher Palavra</button>
        <p data-test="word" className={`${acerto} ${erro}`}>{arrPalavraEscondida.map((letra)=>(letrasEscolhidas.includes(letra) ? letra : " _"))}</p>
      </section>
    </main>
  );
}
