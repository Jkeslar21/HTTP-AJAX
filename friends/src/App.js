import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import FriendTitle from './components/FriendTitle';

class App extends Component {

    state = {
      friends: [],
      error: '',
      activeFriend: null
    }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ error: err }))
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data}))
      .catch(err => console.log(err))
  }

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:500/friends/${friend.id}`, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  setUpdateForm = (e, friend) => {
    console.log(friend)
    e.preventDefault();
    this.setState({ activeFriend: friend })
  }

  render() {
    return (
      <div className="App">
        <FriendTitle />
        <FriendForm addFriend={this.addFriend} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} />
        <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} />
      </div>
    );
  }
}

export default App;
