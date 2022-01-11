export default function targeta_exportado_por_defecto({tema,img,ruta}){

  return <div className="flex items-center mx-3 my-3">
    <a href={ruta} target='_blank' className="flex flex-col items-center bg-purple-400 hover:bg-blue-400 transition rounded py-2 px-1" rel="noreferrer">
      <h1 className="max-w-fit">{`${tema}`}</h1>
      <img className="w-56" src={img}/>
    </a>
  </div>
}