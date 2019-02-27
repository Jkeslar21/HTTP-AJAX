import React from 'react'
import Friend from './Friend';

export default function FriendsList(props) {
  return (
    <div className='friendsList'>
      <div className='titleUnderline'>
        <h1 className='title'>Friends List</h1>
      </div>
      {props.friends.map( friend => <Friend key={friend.id} friend={friend}/> )}
    </div>
  )
}
