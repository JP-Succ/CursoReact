import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getByIdAlbum} from '../Service/productosServices'
const styles = {
    img:{
        width:'100px',
        backgroundColor:"red"
    }
}
function Detalle() {
    const {id} = useParams()
    console.log('id album: ',id)
    const [album, setAlbum] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(
        () => {
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getByIdAlbum(id)
                    console.log('response',response)
                    setAlbum(response.data)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [id]
    )
    if (loading) {
        
        return (
            <div>
                Cargando...
            </div>
        )    
    }else{
        return (
            <div>
                <p>{album.title}</p>
                <img src={album.thumbnailUrl} style={styles.img}></img>
            </div>
        )
    }
    
}

export default Detalle