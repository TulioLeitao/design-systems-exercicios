import {ChakraProvider } from "@chakra-ui/react"
import { useState } from "react";
import Cards from "./cards/Cards"
import axios from "axios" // axios serve para fazer requisição

function App() {
  
  const [nome, setNome] = useState ([])
  console.log (nome)

  const requisicao = () => {
    const url = "https://swapi.dev/api/people/"

    axios.get(url)
    .then((res) => {
      setNome (res.data.results)         
    })
    .catch((err) => {
      console.log (err)
    })

  

  }

  return (
    <ChakraProvider>
      {nome.map((mapa) => {
        return <Cards nome={mapa.name}/>
      })}

     <button onClick={requisicao}>Oi Edu</button>
    </ChakraProvider>
    
  );
}

export default App;
