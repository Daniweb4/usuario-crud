import React from 'react'
import './style/cardUser.css'
const CardUser = ({user,deleteUser,setIsOpen}) => {
    const handleDelete=()=>{
        deleteUser('/users',user.id);

    }
    const handleEdit=()=>{
        setIsOpen(true)

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
        <button className='delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>

            <button className='edit' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
            </div> 
    </div>
  )
}

export default CardUser
