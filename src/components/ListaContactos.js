import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import Contacto from './Contacto'

const ListaContactos = () => {
    const [contactos, setContactos] =useState([])

    useEffect(() => {
        db.collection('usuarios').onSnapshot((snapshot)=>{
            setContactos(snapshot.docs.map((doc) => {
                return {...doc.data(), id:doc.id}
            }))
        });
    }, [])
    

  return (
      contactos.length > 0 &&
      <ContenedorContactos>
        {contactos.map((contacto) => (
            <Contacto key={contacto.id} id= {contacto.id} nombre={contacto.nombre} email={contacto.email} />
        ))}
      </ContenedorContactos>  
  )
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
export default ListaContactos