import React from 'react'

export default function Friend(props) {
  return (
    <div className='friendCard'>
      <h2 className='name'>{props.friend.name}</h2>
        <div className='friendInfo'>
            <h4><span className='key'>Age:</span> {props.friend.age}</h4><br/>
            <p><span className='key'>E-mail:</span> {props.friend.email}</p>
        </div>
    </div>
  )
}
