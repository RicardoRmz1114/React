import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import './DataTable.css';
import { Button,Table } from 'reactstrap';
import * as AiIcons from "react-icons/ai"
import dataContext from '../../Store/data-context';
import { Spinner } from 'reactstrap';



const DataTable = (props) => {
const ctx = useContext(dataContext)
    console.log(ctx.users)
    
    console.log(ctx)
    const { deleteUser } = useContext(dataContext);
    const [isLoading,setIsLoading] = useState(false);



    // const fetchUsersHandler = async () => {
    //     try{
    //         console.log('entro')
    //         const response = await fetch('https://react-http-bf89f-default-rtdb.firebaseio.com/users.json');
    //         if(!response.ok){
    //             throw new Error('Something went wrong');
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //         const loadedUsers = [];
    //         for(const key in data){
    //             loadedUsers.push({
    //                 key: key,
    //                 id: data[key].id,
    //                 name: data[key].name,
    //                 lastName: data[key].lastName,
    //                 email: data[key].email,
    //                 age: data[key].age,
    //                 position: data[key].position
    //             })
                
    //         }
    //         setUsers(loadedUsers);
    //         setIsLoading(false);
    //         console.log(loadedUsers);
    //     } catch(error) {
    //         setIsLoading(false);
    //         console.log(error.message);
    //     }
    // }
    
    // let usersss = ctx.users

    // useEffect(() => {
    //     setIsLoading(true);
    //     console.log('entro al useEffect')
    //     setTimeout(() => {
    //         fetchUsersHandler();
    //     },2000)
        
    // },[usersss])


    const deleteUserHandler = (user) => {
        Swal.fire({
            title: 'Warning!',
            text: ' ¿ Do you want to delete this user ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
          }).then( (result) => {
              if(result.value){
                deleteUser(user)
              }
          })
        console.log(user)
        //console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)) random string
       
    }

    const deleteusr = () =>{
        console.log('deleted')
    } 

    const openModal = (user) => {
        props.openModal(user)
    }


    return(
        
        <div>
            {ctx.users.length > 0 && !props.loading && <h1 className="center">Total amount of users: {ctx.users.length}</h1>}
            
            <div className="center-box">
            {ctx.users.length === 0 && !props.loading &&<h1 className="center">You have no users</h1>}
            {ctx.users.length >0 && !props.loading && <Table >
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Position</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { ctx.users.map(data => (
                    <tr key={data.id}>
                    <th>{ ctx.users.indexOf(data) + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.age}</td>
                    <td>{data.position}</td>
                    <td><AiIcons.AiTwotoneDelete onClick={ () => deleteUserHandler(data)} />
                     / {'  '} <AiIcons.AiFillEdit onClick={ () => openModal(data)}/> </td>
                    {/* <Button onClick={ () => deleteUserHandler(data)}>Delete</Button> */}
                    {/* <Button onClick={ () => openModal(data)}>Edit</Button> */}
                    </tr>
                ))}

            </tbody>
            </Table>}
            {props.loading &&<Spinner children=""  color="success" />}
            {props.loading && <p>Loading...</p>}
            </div>
        </div>
    )
};

export default DataTable;