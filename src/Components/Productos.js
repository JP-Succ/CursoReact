import React,{useState,useEffect} from "react"
import Album from './Album'
import {getAllAlbums} from "../Service/productosServices"
function Productos(){
    const [listaAlbums,setListaAlbums]=useState([])
    const [response,setResponse]=useState({})
    const [loading,setLoading] = useState(true)
    const [buscar,setBuscar] = useState('ipod')
    /*
        function(){}
    */
    //componentDidMount
    useEffect(
        ()=>{
            /*fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")
            .then(res=>res.json())
            .then(data=>{
                console.log("data",data)
                setListadoProductos(data.results)
                setLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })*/
            const request = async ()=>{
                
                try{
                    setLoading(true)
                  //  const response = await getAllProductos(buscar)
                    const response = await getAllAlbums()
                    console.log('response',response)
                    //setListadoProductos(response.data.results)
                    setListaAlbums(response.data)
                    setResponse(response.data)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [buscar]
    )
    const filtrar=()=>{
        setBuscar('motorola')
    }
    const reset=()=>{
        setBuscar('ipod')
    }
    if(loading){
        return(
            <div>
                Cargando ...
            </div>
        )
        
    }else{
        return(
            <div>
                <h1>Listado Productos</h1>
                <h2>Cantidad de productos {response?.paging?.total}</h2>
                <button onClick={filtrar}>Filtrar</button>
                <button onClick={reset}>Reset</button>
                {listaAlbums.map(listaAlbum =><Album title={listaAlbum.title} id={listaAlbum.id} thumbnailUrl={listaAlbum.thumbnailUrl} /> )}               
                
            </div>
        )
    }
    
}

export default Productos