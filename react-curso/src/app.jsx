import { useEffect, useState } from "react";
import './app.css'
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
//const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWord}'


export function App() {
  const [fact, setFact] = useState();
  const [imageUrl,setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWord = fact.split(' ',3).join(' ')
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=black&json=true`)
          .then(res => res.json())
          .then(response =>{
            console.log(response)
          const { url } = response
          setImageUrl(`https://cataas.com/cat/says/${threeFirstWord}?size=50&fontColor=red`)
          })

    })    
  },[]);

  return (
    <main>
    <h1>App de gatitos</h1>
    <section>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen sacada de ${fact}`}/>}
    </section>
      
    </main>
  );
}
