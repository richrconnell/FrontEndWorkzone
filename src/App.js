import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserDetails from './UserDetails'

import UserForm from './UserForm'

import api from './api'

class App extends Component {
	
	state = {
		list: [],
		loading: true
	}
	
	componentDidMount() {
		api.listUsers().then(list => {
						
			this.setState({
				list,
				loading: false
			})
			
		})
	}
	
  render() {
    return (
      <div className="App">
        
        
			{this.state.loading ? 'Loading ...':''}
        
		<ul className="user-list" style={{ textAlign: 'left'}}>
		{this.state.list.map(this.renderUser, this)}
		</ul>

      {this.renderUserDetails()}
      {this.renderUserForm()}
      <button onClick={this.onAddNew}>Add new</button>
      </div>
    );
  }

  onAddNew = () => {
    this.setState({
      editingUser: {firstName:'', lastName: ''}
    })
  }

  onEdit(user) {
    
    this.setState({
      editingUser: user
    })
  }

  onSave(user) {
    if (!user.id) {
      api.createUser(user)
    }

    this.setState({
      edititingUser: null,
      selectedUser: null
    })
  }

  renderUserForm() {
    const user = this.state.editingUser
    if (!user) {
      return null
    }

    return <UserForm key={user.id} onSave={this.onSave.bind(this)} user={user} />
  }

  renderUserDetails() {
    const user = this.state.selectedUser
    if (!user || this.state.editingUser) {
      return null
    }

    return <UserDetails onEdit={this.onEdit.bind(this)} user={{
      firstName: user.UserFirstName,
      lastName: 'last',
      id: user.Userid
    }} />
  }
  
  renderUser(item, index) {
	  return <li className="user-item" key={item.id || index} onClick={this.onUserClick.bind(this, item)}>{item.UserFirstName}</li>
  }

  onUserClick(user) {
    this.setState({
      selectedUser: user
    })
  }
}

export default App;