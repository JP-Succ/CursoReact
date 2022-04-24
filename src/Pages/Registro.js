import React,{Component, useState} from "react"
import Input from "../Components/Input"
import {useForm} from "react-hook-form"

function Registro(){

    /* const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''}) */
    /*const [mensaje, setMensaje] = useState('')*/
    const {register, handleSubmit, formState: { errors }} = useForm()
    //const onSubmit = data => console.log(data)
    const onSubmit=(data)=>{
        //envío datos a firebase
        console.log('form', data)
        
    }
    return(
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Input label="Nombre" register={ {...register("nombre", { required: true })} } />
                    {errors.nombre && <span>El campo nombre es obligatorio</span>}
                    <Input label="Apellido" register={ {...register("apellido", { required: true })} } />
                    {errors.apellido && <span>El campo apellido es obligatorio</span>}
                    <Input label="Email" type="email" register={ {...register("email", { required: true })} } />
                    {errors.email && <span>El campo email es obligatorio</span>}
                    <Input label="Contraseña" type="password" register={ {...register("password", { required: true })} } />
                    {errors.password && <span>El campo password es obligatorio</span>}
                    <button type="submit">Registrarme</button>
                </form>
            </div>
        )    

}

export default Registro