import { useState } from 'react'
import ProductCard from './components/ProductCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-wrapper">
      <ProductCard/>
    </div>
  )
}

export default App
