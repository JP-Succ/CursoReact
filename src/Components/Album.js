import {Link} from 'react-router-dom'
const styles = {
    img:{
        width:'100px',
        backgroundColor:"red"
    }
}
function Album(props){
    console.log("Props",props)
    /*const {nombre,precio,descripcion,children, id, thumbnail} = props*/
    const {title, id, thumbnailUrl} = props
    
    return(
        <>
            <div>
                <img src={thumbnailUrl} style={styles.img}></img>
                <p>{title}</p>
                <button>Comprar</button>
                <Link to={'albums/'+id}>Ver Detalle</Link>
            </div>
        </>
    )
}
export default Album