import alfabeto from "./alfabeto";

export default function Letras({letrasEscolhidas, escolherLetra, arrPalavraEscondida}) {    
  console.log(arrPalavraEscondida.length);
  return (
    <div className="letras-box">
        {alfabeto.map((letra,index)=>(
            <button key={index} className={`letra-box ${letrasEscolhidas.includes(letra) ? "letra-escolhida":""}`} onClick={()=>escolherLetra(letra)} disabled={letrasEscolhidas.includes(letra) && true }>{letra.toUpperCase()}</button>
        ))}  
    </div>
  );
}

// disabled={letrasEscolhidas.includes(letra) && true }
