import { useEffect, useState } from 'react'

import './App.css'




function App() {
  const [food, setFood] = useState([])

  useEffect(() => {
    fetch('/food.json')
      .then(res => res.json())
      .then(data => {
        setFood(data)
      })

  }
    , [])



  return (
    <>
      <div>
        <p> a list of yummi tummi foods</p>
      </div>
      <div>
        <ul>
          {food.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
