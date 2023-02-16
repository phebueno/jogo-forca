export default function Jogo({ imgForca }) {
  return (
    <main className="jogo">
      <img src={imgForca} alt="" />
      <section className="lado-palavra">
        <button className="botao-palavra">Escolher Palavra</button>
        <p>palavra</p>
      </section>
    </main>
  );
}
