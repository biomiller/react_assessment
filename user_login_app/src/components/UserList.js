import React from 'react';
import { User } from './User.js';


export function UserList(props) {

    return (
        <div>
            <h1>Users:</h1>

            {props.data.map(user => (
                <div key={user._id}>
                    <br></br>
                    <User
                        user={user}
                    />
                </div>
            ))
            }
        </div>

    );
}