import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

class UserDetails extends React.Component {

    static propTypes = {
        user: PropTypes.shape({
            firstName: PropTypes.string
        }),
        onEdit: PropTypes.func
    }

    render() {
        const { user} = this.props


        return <div className="user-details">
            <label>First name:</label>
            <div>{user.firstName}</div>

            <label>Last name:</label>
            <div>{user.lastName}</div>

            <button onClick={() => this.props.onEdit(user)}>Edit</button>

        </div>
    }
}

export default UserDetails