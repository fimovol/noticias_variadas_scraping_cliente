import { Link } from 'react-router-dom'
import './App.css'
import NoticiasdelComercio from './componets/noticiascomercio'
import NoticiasPeru21 from './componets/noticiasperu21'
import NoticiasLaRepublica from './componets/noticiaslarepublica'

function App() {
  return (
    <div className="App">
      <Link to="/jkanime"><h1>scraping la web de JKANIME</h1></Link>
      <NoticiasdelComercio/>
      <NoticiasPeru21/>
      <NoticiasLaRepublica/>
    </div>
  )
}

export default App
