import {gql, useQuery} from '@apollo/client'
import Targeta from './targetacomercio'
import Loading from './loading'

const script= gql`
{
   larepublica(limit:5){
    img
    nombre
    hora
    href
  }
}
`
/*const data= {
  "larepublica": [
      {
        "nombre": "Melissa Paredes tiene curiosa reacción al escuchar a ‘Checho’ Ibarra elogiar al ‘Gato’ Cuba",
        "img": "https://larepublica.pe/resizer/nOITHPs0JyIo7Lc7QJhA6-1Q4lY=/185x104/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/4IHVUSTJM5HONHYMSKLBT5RWO4.jpg",
        "hora": "14 Ene 2022 | 10:58 h",
        "href": "https://larepublica.pe/espectaculos/2022/01/14/melissa-paredes-tiene-curiosa-reaccion-al-escuchar-a-checho-ibarra-elogiar-al-gato-cuba-mujeres-al-mando/"
      },
      {
        "nombre": "Luciana Fuster recibe sus 23 años con Patricio Parodi en Miami",
        "img": "https://larepublica.pe/resizer/HoowbeeXZioXindi3sEyuAO3cWs=/185x104/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/F34AC26UAVBSJFEMCA77YDE4Z4.jpg",
        "hora": "14 Ene 2022 | 10:58 h",
        "href": "https://larepublica.pe/espectaculos/2022/01/14/luciana-fuster-cumple-23-anos-y-lo-celebra-con-patricio-parodi-en-discoteca-de-miami-instagram/"
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
          :data.larepublica.map(({nombre,hora,img,href}) => <Targeta key={nombre} nombre={nombre} hora={hora} img={img} href={href}/>)
      }
    </div>
  </>
}