import { Link } from 'react-router-dom'
import './App.css'
import NoticiasdelComercio from './componets/noticiascomercio'

function App() {
  return (
    <div className="App">
      <Link to="/jkanime"><h1>scraping la web de JKANIME</h1></Link>
      <Link to="/animeflash"><h1>scraping la web de ANIMEFLASH</h1></Link>
      <NoticiasdelComercio/>
    </div>
  )
}

export default App
