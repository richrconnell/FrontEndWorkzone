import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

class UserForm extends React.Component {

    static propTypes = {
        user: PropTypes.shape({
            firstName: PropTypes.string
        }),
        onSave: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            user: props.user || {
                firstName: '',
                lastName: ''
            }
        }
    }

    onChange(property) {
        return (event) => {
            const value = event.target.value

            this.setProperty(property, value)
        }
    }

    setProperty(property, value) {
        this.setState({
            user: {...this.state.user, [property]: value}
        })
    }

    render() {
        const { user} = this.state

        return <div className="user-details">
            <label>First name:</label>
            <input value={user.firstName} onChange={this.onChange('firstName')}/>

            <label>Last name:</label>
            <input value={user.lastName} onChange={this.onChange('lastName')}/>

        <div>
            <button onClick={() => this.props.onSave(user)}>Save</button>
        </div>
        </div>
    }
}

export default UserForm