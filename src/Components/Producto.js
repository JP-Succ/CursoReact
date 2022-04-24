import {Link} from 'react-router-dom'
const styles = {
    img:{
        width:'100px',
        backgroundColor:"red"
    }
}
function Producto(props){
    console.log("Props",props)
    const {title, id, thumbnailUrl} = props
    return(
        <>
            <div>
                <img src={thumbnailUrl} style={styles.img}></img>
                <p>{title}</p>
                <button>Comprar</button>
                <Link to={'/producto/'+id}>Ver Detalle</Link>
            </div>
        </>
    )
}
export default Producto