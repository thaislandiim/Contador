import './App.css';

import {useState, useEffect} from 'react'

function App() {
  const [contador, setContador] = useState(0);
  const [contadorAntigo, setContadorAntigo] = useState(0);
  const [operacaoMult10, setOperacaoMult10] = useState(false);
  const [operadorPar, setOperadorPar] = useState(false);

  const handleContadorMais = () => {
    setContadorAntigo(contador)
    setContador(contador + 1)
  }
  const handleContadorMenos = () => {
    setContadorAntigo(contador)
    setContador(contador - 1)
  }

  useEffect(() => {
    setOperadorPar(contador % 2 == 0);
    setOperacaoMult10(contador % 10 == 0);
  }, [contador])

  return (
    <div className="container mt-5">
      <div class="card text-center mb-3">
        <div class="card-header">
          <h1>Contador</h1>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h2>Antigo: {contadorAntigo}</h2>
          </div>
          <div class="col">
            <h2>Atual:
              <span className={operadorPar ? "text-success" : "text-danger"}> {contador}
              </span>
            </h2> 
          </div>
        </div>
      </div>
      <div class="card text-center mb-3">
        {operadorPar ? "Esse número é par" : "Esse número é impar"}
      </div>
        {operacaoMult10 ? 
        <div class="card text-center mb-3">Esse número é múltiplo de 10</div>
         : null
        }
      <div class="text-center">
      <button class="btn btn-primary px-3" onClick={handleContadorMenos}> - </button>
      <button class="btn btn-primary px-3 ms-3" onClick={handleContadorMais}> + </button>
      </div>
    </div>
  );
}

export default App;
