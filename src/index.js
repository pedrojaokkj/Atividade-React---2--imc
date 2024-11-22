import React from 'react';
import ReactDOM from 'react-dom/client';


function CauculadoraIMC(props){
  const imc = props.peso / (props.altura * props.altura)
  let retorno = ""

  if (imc < 18.5){
    retorno = "Abaixo de Peso"
  }else if (imc < 25){
    retorno = "Peso Normal"
  }else if (imc < 30){
    retorno = "Sobrepeso"
  }else{
    retorno = "Obesidade"
  }

  return <p>{retorno}</p>
}

function App(){
  return(
    <div>
      <h1>Questão 2 - CauculadoraIMC</h1>
      <CauculadoraIMC peso = {70} altura = {1.75}/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
);

