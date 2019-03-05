import React from 'react'

export default function Friend(props) {
  return (
    <div className='friendCard'>
      <h2 className='name'>{props.friend.name}</h2>
        <div className='friendInfo'>
            <h4><span className='key'>Age:</span> {props.friend.age}</h4><br/>
            <p><span className='key'>E-mail:</span> {props.friend.email}</p>
            <button onClick={e => props.setUpdateForm(e, props.friend)} >Update Info</button>
            <button onClick={e => props.deleteFriend(e, props.friend.id)}>X</button>
        </div>
    </div>
  )
}
