export default function Jogo({ imgForca, palavras, arrPalavraEscondida, escolherPalavra, letrasEscolhidas, acertos, tentativas, palavraCaracteresUnicos}) {
    //Adicionar duas linhas com as condições de erro/acerto para enfiar no código abaixo: 
  const acerto = acertos === palavraCaracteresUnicos ? "acerto" : "";
  const erro = tentativas === 6 ? "erro" : "";
  return (
    <main className="jogo">
      <img data-test="game-image" src={imgForca} alt="" />
      <section className="lado-palavra">
        <button data-test="choose-word" className="botao-palavra" onClick={()=>escolherPalavra(palavras)}>Escolher Palavra</button>
        <p data-test="word" className={`${acerto} ${erro}`}>{arrPalavraEscondida.map((letra)=>(letrasEscolhidas.includes(letra.normalize("NFD").replace(/\p{Diacritic}/gu, "")) ? letra : " _"))}</p>
      </section>
    </main>
  );
}
