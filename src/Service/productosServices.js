import axios from "../Config/axios"
export async function getAllProductos(buscar){
    return axios.get("/sites/MLA/search?q="+buscar) 
}

export async function getByIdProducto(id){
    return axios.get("/items/"+id) 
}

export async function getAllAlbums(buscar){
    return axios.get('albums/1/photos')
}

export async function getByIdAlbum(id){
    return axios.get('albums/'+id)
}