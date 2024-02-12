import React, { useState } from 'react'
import './style/cardUser.css'
const CardUser = ({user,deleteUser,setIsOpen,seteditUser}) => {
    const[isModal,setIsModal]=useState(false)
    const handleDelete=()=>{
        deleteUser('/users',user.id);

    }
    const handleEdit=()=>{
        setIsOpen(true);
        seteditUser(user)

    }
    

  return (
    <div className='card_container'>
        <h3 className='card_name'>{user.first_name}  {user.last_name}</h3>
        <hr/>
        <ul className='card_list'>
            <li className='item' >
                <span className='item_correo'>CORREO</span><br></br>
                <span>{user.email}</span><br></br>
            </li>
            <li className='item'>
                <span className='item_birthday'>CUMPLEAÑOS</span><br></br>
                <span><ion-icon name="trash-outline"></ion-icon>  {user.birthday}</span>
            </li>
            <hr className='linea'/>
            
        </ul>
        <div className='btn'> 
        <button className='delete' onClick={()=>setIsModal(true)}><ion-icon name="trash-outline"></ion-icon></button>
        {
            isModal && (
                
                <form className='modal'>
                    <div className='card_modal'>
                     <h3 className='title_modal' >¿ Deseas eliminar este usuario.?</h3><br></br>
                    <button className='delete_user' onClick={()=>setIsModal(handleDelete)}>Eliminar</button>
                    <button className='delete_user' onClick={()=>setIsModal(false)}>Cerrar</button>
                    </div>
                </form>
            
            

            )
            
        }
       
        <button className='edit' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
        </div> 
    </div>
  )
}

export default CardUser
