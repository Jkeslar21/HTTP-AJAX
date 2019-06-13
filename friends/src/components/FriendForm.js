import React, { Component } from 'react';

export default class FriendForm extends Component {
  constructor(props) {
      super(props);
        this.state = {
            friend: this.props.activeFriend || {
                name: '',
                age: '',
                email: ''
            },
            active: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
        this.setState({ friend: this.props.activeFriend, active: true })
    }
  }

  changeHandler = e => {
      e.persist();
      this.setState(prevState => ({ friend: {...prevState.friend, [e.target.name]: e.target.value}}))
  }
 
  submitHandler = (e, friend) => {
    if (this.state.active) {
      this.props.updateFriend( e, this.state.friend)
    } else{
      this.props.addFriend(e, this.state.friend)
    }
    this.setState({  
      friend: {
        name: '',
        age: '',
        email: ''
    }, active: false })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className='form' >
            <input type='text' name='name' placeholder='Name' value={this.state.friend.name} onChange={this.changeHandler} required/>
            <input type='text' name='age' placeholder='Age' value={this.state.friend.age} onChange={this.changeHandler} required/>
            <input type='text' name='email' placeholder='E-mail' value={this.state.friend.email} onChange={this.changeHandler} required/>
            <button>{`${this.state.active ? 'Update' : 'Add Friend'}`}</button>
        </form>
      </div>
    )
  }
}
