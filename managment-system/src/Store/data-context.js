import React from 'react';

const dataContext = React.createContext({
    users: [],
    totalUsersAmount: 0,
    addUser: (user) => {},
    editUser: (user) => {},
    deleteUser: (user) => {}
});

export default dataContext;