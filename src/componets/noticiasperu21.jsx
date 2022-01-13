import {gql, useQuery} from '@apollo/client'
import Targeta from './targetacomercio'
import Loading from './loading'

const script= gql`
{
	peru21noticias(limit:5){
    img
    nombre
    hora
    href
  }
}
`
/*const datos= {
  "peru21noticias": [
      {
        "img": "https://peru21.pe/resizer/dDb1uTFqOxUCo75npmcioE5Yv_Q=/234x161/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SXOECV2MYBCSLDL3DXCNBSVDVY.jpg",
        "nombre": "Niños de 5 a 11 años con comorbilidades y de 10 a 11 serán el primer grupo a vacunar contra COVID-19",
        "hora": "10:46 a.m.",
        "href": "https://peru21.pe/lima/covid-19-menores-de-5-a-11-anos-con-comorbilidades-y-de-10-a-11-seran-el-primer-grupo-a-vacunar-la-proxima-semana-nndc-noticia/"
      },
      {
        "img": "https://peru21.pe/resizer/rBLvXEF_QHpD8pET7BNqJieYBY8=/234x161/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7DW6KYAY5JHFPB7KVX2EZ574DU.jpg",
        "nombre": "Magaly tras muerte de Luis Castañeda: “Hace tiempo dejé atrás nuestras diferencias”",
        "hora": "10:40 a.m.",
        "href": "https://peru21.pe/espectaculos/luis-castaneda-lossio-magaly-medina-y-su-mensaje-tras-la-muerte-del-exalcalde-de-lima-farandula-nndc-noticia/"
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
          :data.peru21noticias.map(({nombre,hora,img,href}) => <Targeta key={nombre} nombre={nombre} hora={hora} img={img} href={href}/>)
      }
    </div>
  </>
}