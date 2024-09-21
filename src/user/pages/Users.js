import React from 'react';
import UsersList from '../components/UsersList';

const Users = ()=>{
    const USERS = [
        {
            id: 'u1', name: 'Faith Mbata', image: 'https://images.pexels.com/photos/16901605/pexels-photo-16901605/free-photo-of-women-picture.jpeg?auto=compress&cs=tinysrgb&w=600 ', events: 3
        }
    ]; 

    return <UsersList items={USERS} />;
};

export default Users;