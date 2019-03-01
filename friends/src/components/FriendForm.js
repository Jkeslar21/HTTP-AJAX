import React, { Component } from 'react'

export default class FriendForm extends Component {
  constructor(props) {
      super(props);
        this.state = {
            friend: this.props.activeFriend || {
                name: '',
                age: '',
                email: ''
            }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
        this.setState({ friend: this.props.activeFriend })
    }
  }

  changeHandler = e => {
      e.persist();
      this.setState(prevState => ({ friend: {...prevState.friend, [e.target.name]: e.target.value}}))
  }
 
  submitHandler = (e, friend) => {
    this.props.addFriend(e, this.state.friend)
    this.setState({  friend: {
        name: '',
        age: '',
        email: ''
    } })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input type='text' name='name' placeholder='Name' value={this.state.friend.name} onChange={this.changeHandler} />
            <input type='number' name='age' placeholder='Age' value={this.state.friend.age} onChange={this.changeHandler} />
            <input type='text' name='email' placeholder='E-mail' value={this.state.friend.email} onChange={this.changeHandler} />
            <button>Add Friend</button>
        </form>
      </div>
    )
  }
}
