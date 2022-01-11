import {gql, useQuery} from '@apollo/client'
import Targeta from '../componets/targeta'
import { Link } from 'react-router-dom'
import Loading from '../componets/loading'

const script= gql`
  {
    animeflash{
      titulo
      imagen
      ruta
    }
  }
`
/*const datos= {
  'scraping': [
    {
      'titulo': 'Gensou Sangokushi: Tengen Reishinki',
      'imagen': 'https://cdn.jkanime.net/assets/images/animes/image/gensou-sangokushi-tengen-reishinki.jpg',
      'ruta': 'https://jkanime.net/gensou-sangokushi-tengen-reishinki/1/'
    },
    {
      'titulo': 'Princess Connect! Re:Dive Season 2',
      'imagen': 'https://cdn.jkanime.net/assets/images/animes/image/princess-connect-redive-season-2.jpg',
      'ruta': 'https://jkanime.net/princess-connect-redive-season-2/1/'
    }
  ]
}*/
export default function _(){
  const {data,loading} = useQuery(script)
  return <>
    <Link to="/" >VOLVER</Link>
    <div className='flex flex-wrap flex-row items-center justify-center'>
      {
        loading 
          ? <Loading/>
          :data.animeflash.map(({titulo,imagen,ruta}) => <Targeta key={titulo} tema={titulo} img={imagen} ruta={ruta}/>)
      }
    </div>
  </>
}