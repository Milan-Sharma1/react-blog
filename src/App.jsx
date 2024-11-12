import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Blog app with app write</h1>
      {import.meta.env.VITE_APPWRITE_URL}
    </>
  );
}

export default App
