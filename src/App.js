import './App.css';


import {useState, useEffect} from 'react'

function App() {
  const [contador, setContador] = useState(0);
  const [contadorAntigo, setContadorAntigo] = useState(0);
  const [operacaoParImpar, setOperacaoParImpar] = useState("")
  const [operacaoMult10, setOperacaoMult10] = useState("")

  const handleContadorMais = () => {
    setContadorAntigo(contador)
    setContador(contador + 1)
  }
  const handleContadorMenos = () => {
    setContadorAntigo(contador)
    setContador(contador - 1)
  }

  useEffect(() => {
    if (contador % 2 == 0) {
      setOperacaoParImpar("Esse número é par")
    } else {
      setOperacaoParImpar("Esse número é impar")
    }

    if(contador % 10 == 0){
      setOperacaoMult10("Esse número é múltiplo de 10")
    } else {
      setOperacaoMult10(" ")
    }
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
            <h2>Atual: {contador}</h2> 
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <p>Par ou impar:</p>
          </div>
          <div class="col">
            <p>{operacaoParImpar}</p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <p>Múltiplo de 10:</p>
          </div>
          <div class="col">
            <p>{operacaoMult10}</p>
          </div>
        </div>
      </div>

      <button class="btn btn-primary px-3" onClick={handleContadorMenos}> - </button>
      <button class="btn btn-primary px-3 ms-3" onClick={handleContadorMais}> + </button>
    </div>
  );
}

export default App;
