import forca from "./assets/forca6.png";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
export default function App() {
  return (
    <div className="App">
      <Jogo imgForca={forca} />
      <footer>
        <Letras />
        <div className="chute">
          <input type="text" />
        </div>
      </footer>
    </div>
  );
}
