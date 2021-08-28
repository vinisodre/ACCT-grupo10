import React, { useState } from "react";
import Axios from "axios";

const leadForm = () => {
    const url = "https://4wnkgl4pyd.execute-api.sa-east-1.amazonaws.com/prod/leads"
    const [data, setData] =  useState({
        name:"",
        email:"",
        phone:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            nome: data.name,
            email: data.email,
            telefone: parseInt(data.phone)
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return(
        <div>
            <form onSubmit= {(e)=> onSubmit(e)}>
                <label htmlFor="name">Nome</label>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeHolder="name" type="text"></input>
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeHolder="email" type="email"></input>
                <label htmlFor="phone">Telefone</label>
                <input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeHolder="phone" type="number"></input>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default leadForm