export default function Jogo({ imgForca, palavras, arrPalavraEscondida, escolherPalavra, letrasEscolhidas }) {
    
  return (
    <main className="jogo">
      <img src={imgForca} alt="" />
      <section className="lado-palavra">
        <button className="botao-palavra" onClick={()=>escolherPalavra(palavras)}>Escolher Palavra</button>
        <p>{arrPalavraEscondida.map((letra)=>(letrasEscolhidas.includes(letra) ? letra : " _"))}</p>
      </section>
    </main>
  );
}
