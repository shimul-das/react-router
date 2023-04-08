import React from 'react'
import './friend.css'

const Friend = ({friend}) => {
console.log(friend);
const {email,name,id,phone}=friend;
return (
<div className='friend'>
    <h3>{name}</h3>
    <p>email: {email}</p>
    <p>phone: {phone}</p>
</div>
)
}

export default Friend