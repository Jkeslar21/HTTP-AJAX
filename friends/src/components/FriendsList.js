import React from 'react'
import Friend from './Friend';

export default function FriendsList(props) {
  return (
    <>
      {props.friends.map(friend => <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} setUpdateForm={props.setUpdateForm} />)}
    </>
  )
}
