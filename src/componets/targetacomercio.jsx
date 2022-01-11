export default function _({nombre,hora,img,href}){
  return  <div className="flex items-center mx-3 my-3">
    <a href={href} target='_blank' className="flex flex-col items-center bg-purple-400 hover:bg-blue-400 transition rounded py-2 px-1" rel="noreferrer">
      <h5 className="max-w-fit">{`${nombre}`}</h5>
      <img className="w-56" src={img}/>
      <h5 className="max-w-fit">{`${hora}`}</h5>
    </a>
  </div>
}