import React, {useState} from 'react'
import styled from 'styled-components'
import ListaContactos from './ListaContactos'
import db from './../firebase/firebaseConfig'

const Formulario = () => {
const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')

const onSubmit = (e) => {
    e.preventDefault();
    db.collection('usuarios').add({
        email: email,
        nombre: nombre
    }).then(()=>{
        console.log("Correct")
        setNombre('')
        setEmail('')
    }).catch((err)=>{
        console.log("Fail", err)

    })
}


  return (
  <>
    <form action='' onSubmit={onSubmit}>
        <Input
            type='email'
            name='correo'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder="Correo"
        />
        <Input
            type='text'
            name='nombre'
            value={nombre}
            onChange={(e) => {setNombre(e.target.value)}}
            placeholder="Nombre"
        />

        <Boton type='submit'>Agregar</Boton>
    </form>
  </>
  )
}
const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;
 
const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;
export default Formulario