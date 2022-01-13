import {gql, useQuery} from '@apollo/client'
import Targeta from './targetacomercio'
import Loading from './loading'

const script= gql`
{
	noticias(limit:5){
    nombre
    hora
    img
    href
  }
}
`
/*const datos= {
  'noticias': [
    {
      'nombre': 'BTS: Álbum “Butter” rompió record de ventas en el 2021 y se convierte en un “best seller”',
      'hora': '12:50 p.m.',
      'img': 'https://elcomercio.pe/resizer/57pWJjEKNY9uRXGUeOEz_zpIwXk=/234x161/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ROBRJQUYMBBHFIP6C7FKFEDFFU.png',
      'href': 'https://elcomercio.pe/luces/musica/bts-album-butter-rompio-record-de-ventas-en-el-2021-y-se-convierte-en-un-best-seller-bangtan-kpop-tdex-noticia/'
    },
    {
      'nombre': 'Real Madrid vs. Barcelona en vivo: horarios y dónde se ve la Supercopa de España',
      'hora': '12:47 p.m.',
      'img': 'https://elcomercio.pe/resizer/Ic9R-AtgFFVPV4_urimyl86M-pA=/234x161/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/O6WPQQ66SVDQTF27VJASLJ4POQ.jpg',
      'href': 'https://elcomercio.pe/deporte-total/futbol-mundial/real-madrid-vs-barcelona-en-vivo-online-via-movistar-lite-y-directv-sports-horarios-y-quien-televisa-la-supercopa-de-espana-2022-video-nczd-dtbn-espana-es-noticia/'
    }
  ]
}*/
export default function _(){
  const {data,loading} = useQuery(script)
  return <>
    <div className='flex flex-wrap flex-row items-center justify-center'>
      {
        loading 
          ? <Loading/>
          :data.noticias.map(({nombre,hora,img,href}) => <Targeta key={nombre} nombre={nombre} hora={hora} img={img} href={href}/>)
      }
    </div>
  </>
}