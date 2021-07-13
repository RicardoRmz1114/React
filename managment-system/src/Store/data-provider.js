import { useEffect, useState } from "react";

import dataContext from "./data-context";


const defaultDataState = {
    users: [],
    totalUsersAmount: 0
};



const DataProvider = (props) => {
    
    const [dataState,setDataState] = useState(defaultDataState);
    //console.log('entro')

    const fetchUsersHandler = async () => {
        props.dataLoading(true)
        try{
            //console.log('entro')
            const response = await fetch('https://react-http-bf89f-default-rtdb.firebaseio.com/users.json');
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            //console.log(data);
            const loadedUsers = [];
            for(const key in data){
                loadedUsers.push({
                    key: key,
                    id: data[key].id,
                    name: data[key].name,
                    lastName: data[key].lastName,
                    email: data[key].email,
                    age: data[key].age,
                    position: data[key].position
                })
                
            }
            // setUsers(loadedUsers);
            props.dataLoading(false);
            setDataState({
                users:loadedUsers,
                totalUsersAmount: loadedUsers.length
            })
            //console.log(loadedUsers);
        } catch(error) {
            props.dataLoading(false);
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchUsersHandler();
    },[])

    


    const addItemHandler = async (user) => {
        const repeateUser = dataState.users.findIndex(element => element.email === user.email );
        //console.log(repeateUser)

        if(repeateUser !== -1){           
            //console.log('EL usuario ya existe');
            props.openModal()
            return
        }
        try{
        const response = await fetch('https://react-http-bf89f-default-rtdb.firebaseio.com/users.json',{
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        //console.log(data);

        setDataState({
            users: [...dataState.users,user],
            totalUsersAmount: dataState.totalUsersAmount + 1
        })
        props.toggleAlert(false);
        //console.log(user)
        }
        catch (error) {
            props.toggleAlert(true);
            console.log(error.message)
        }
    };

    const editItemHandler = async (user) => {

        console.log(user);

        const elementIndex = dataState.users.findIndex(element => element.id === user.id);
        const usersArray = [...dataState.users]
        usersArray[elementIndex] = user;
        console.log(elementIndex);
        //console.log(dataState.users)
        setDataState({
            users: usersArray,
            totalUsersAmount: dataState.totalUsersAmount
        })

        const response = await fetch('https://react-http-bf89f-default-rtdb.firebaseio.com/users/' + user.key + '.json',{
            method: 'PUT',
            body: JSON.stringify(user),
            header:{
                'Content-Type':'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
        props.closeModal();
    };

    const deleteItemHandler = async (deletedUser) => {
        const users = dataState.users.filter(user => user.email != deletedUser.email);
        setDataState({
            users: users,
            totalUsersAmount: dataState.totalUsersAmount -1
        })
        //console.log(deletedUser.key);
        const response = await fetch('https://react-http-bf89f-default-rtdb.firebaseio.com/users/' + deletedUser.key + '.json',{
            method:'DELETE'
        });
        const data = await response.json();
        console.log(data);
    };

    const dataCtx = {
        users: dataState.users,
        totalUsersAmount: dataState.totalUsersAmount,
        addUser: addItemHandler,
        editUser: editItemHandler,
        deleteUser: deleteItemHandler
    }

    return(
        <dataContext.Provider value={dataCtx}>
            {props.children}
        </dataContext.Provider>
    )
};

export default DataProvider;