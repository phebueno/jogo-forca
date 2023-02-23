export default function Chute({chute, setChute, chutar, letrasEscolhidasNum, letrasTotaisNum}) {
  
  const inicioDeJogo = letrasEscolhidasNum===letrasTotaisNum ? "disabled" : undefined;
  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      <input data-test="guess-input" className={inicioDeJogo} type="text" onChange={(e)=>setChute(e.target.value)} onKeyDown={(e)=> e.key ==='Enter' && chutar()} value={chute} disabled={inicioDeJogo}/>
      <button data-test="guess-button" className={`chutar-palavra ${inicioDeJogo}`} onClick={chutar} disabled={inicioDeJogo}>Chutar</button>
    </div>
  );
}
