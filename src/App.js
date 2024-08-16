
import './App.css';
import Saudacao from './componentes/Saudacao';
import Texto from './componentes/Texto';
import Navbar from './componentes/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello World!</h1>
      <Saudacao></Saudacao>
    </div>
  );
}

export default App;
