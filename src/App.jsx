
import { useState } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState('This is a quote')
  const [author, setAuthor] = useState('Author')

  function HandleClick(){
    fetch('https://the-personal-quotes.p.rapidapi.com/quotes/random', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'the-personal-quotes.p.rapidapi.com',
        'X-RapidAPI-Key': '1fa768b108msh8244c86756feabfp1d0107jsn51433888d97d' // Replace with your actual API key
      }
    })
    .then(response => response.json())
    .then(data => {setQuote(data.quote); setAuthor(data.author)})
    .catch(error => console.error('Error fetching data: ', error))
  }

  return (
    <>
      <div className='heading'>
        <h1>QUOTE GENERATOR</h1>
        <p>by JOshua Perth Y. Alviso</p>
      </div>

      <div className='quote-box'>
        <h3>{quote}</h3>
        <p>{author}</p>
        <button type='button' onClick={()=>HandleClick()}>Generate Another!</button>
      </div>
    </>
  )
}

export default App
