import React, { useContext, useRef, useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import dataContext from '../../Store/data-context';
import Swal from 'sweetalert2'

const EditModal = (props) => {

    const ctx = useContext(dataContext);
    const { editUser } = useContext(dataContext);

    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const optRef = useRef();


    const editUserHandler = () =>{

        let usr = {
            key: props.data.key,
            id: props.data.id,
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            age: ageRef.current.value,
            position: optRef.current.value
        }
        editUser(usr);
        
    }

    // const selectInputChangeHandler = (event) => {
    //     console.log(event.target.value)
    //     setOption(event.target.value);
    // }

    return(
        <React.Fragment>
            <Modal isOpen={props.toggle}>
                <ModalHeader>Edit User</ModalHeader>
                <ModalBody>
                    <div className="form-group ">
                    <label>Name</label>
                    <input
                    ref={nameRef}
                    className="form-control"
                    type="text"
                    name="name"
                    defaultValue={props.data.name}
                    />
                    <label>Last Name</label>
                    <input
                    ref={lastNameRef}
                    className="form-control"
                    type="text"
                    name="name"
                    defaultValue={props.data.lastName}
   
                    />
                    <label>Email</label>
                    <input
                    ref={emailRef}
                    className="form-control"
                    type="email"
                    name="name"
                    defaultValue={props.data.email}

                    />
                    <label>Age</label>
                    <input
                    ref={ageRef}
                    className="form-control"
                    type="number"
                    name="name"
                    defaultValue={props.data.age}
              
                    />
                    <label>Position</label>
                <select 
                    name="select" 
                    defaultValue={props.data.position} 
                    ref={optRef} 
                    className="form-control" >
                    <option value="DEFAULT" disabled>Select a position</option>
                    <option value="developer">Developer</option>
                    <option value="tester">Tester</option>
                    <option value="designer">Designer</option>
                </select>
                    {/* <input
                    ref={positionRef}
                    className="form-control"
                    type="text"
                    name="name"
                    defaultValue={props.data.position}
                    /> */}
                    </div>
                </ModalBody>
                <ModalFooter>
          <Button color="primary" onClick={editUserHandler} >Edit</Button>{' '}
          <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
        </ModalFooter>
            </Modal>
        </React.Fragment>
    )
};

export default EditModal;