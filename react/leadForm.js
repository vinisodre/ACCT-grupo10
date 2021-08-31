import React, { useState } from "react";
import {Container, Content, Input, Label, Button} from './styles'
import Axios from "axios";

const leadForm = () => {
    const url = "https://4wnkgl4pyd.execute-api.sa-east-1.amazonaws.com/prod/leads"
    const [data, setData] =  useState({
        name:"",
        email:"",
        phone:"",
        cpf:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            nome: data.name,
            email: data.email,
            telefone: parseInt(data.phone),
            cpf: data.cpf
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
        <Container>
            <Content onSubmit= {(e)=> submit(e)}>
                <Label htmlFor="name">Nome</Label>
                <Input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></Input>
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="email"></Input>
                <Label htmlFor="phone">Telefone</Label>
                <Input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="phone" type="number"></Input>
                <Label htmlFor="cpf">CPF</Label>
                <Input onChange={(e)=>handle(e)} id="cpf" value={data.cpf} placeholder="cpf" type="number"></Input>
                <Button>Enviar</Button>
            </Content>
        </Container>
    )
}

export default leadForm