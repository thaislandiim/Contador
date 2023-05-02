import './App.css';

import {useState, useEffect} from 'react'

function App() {
  const [contador, setContador] = useState(0);
  const [ultimosContadores, setUltimosContadores] = useState([0, 0, 0, 0, 0]);
  const [operacaoMult10, setOperacaoMult10] = useState(false);
  const [operadorPar, setOperadorPar] = useState(false);
  const [operadorPrimo, setOperadorPrimo] = useState(false);

  const handleContadorMais = () => {
    setUltimosContadores((prev) => [contador, ...prev.slice(0, 4)]);
    setContador((prev) => prev + 1);
  };

  const handleContadorMenos = () => {
    setUltimosContadores((prev) => [contador, ...prev.slice(0, 4)]);
    setContador((prev) => prev - 1);
  };

  const numeroPrimo = (num) => {
    for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
    return num > 1;
  }

  useEffect(() => {
    setOperadorPar(contador % 2 == 0);
    setOperacaoMult10(contador % 10 == 0);
    setOperadorPrimo(numeroPrimo(contador));
  }, [contador])

  return (
    <div className="container mt-5">
      <div className="card text-center mb-3">
        <div className="card-header">
          <h1>Contador</h1>
        </div>
        <div className="row mt-2">
          <div className="col">
            <h2>Antigo: {contador - 1}</h2>
          </div>
          <div className="col">
            <h2>Atual:
              <span className={operadorPar ? "text-success" : "text-danger"}> {contador}
              </span>
            </h2> 
          </div>
        </div>
      </div>
      <div className="card text-center mb-3">
        {operadorPar ? "Esse número é par" : "Esse número é impar"}
      </div>
        {operacaoMult10 ? 
        <div className="card text-center mb-3">Esse número é múltiplo de 10</div> : null
        }
        {operadorPrimo ? <div className="card text-center mb-3">É primo</div> : null}
      <div className="text-center">
      <button className="btn btn-primary px-3 ms-3" onClick={handleContadorMais}> + </button>
      <button className="btn btn-primary px-3" onClick={handleContadorMenos}> - </button>
      <div>
      <h3>Últimos 5 números:</h3>
        <ul>
          {ultimosContadores.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
