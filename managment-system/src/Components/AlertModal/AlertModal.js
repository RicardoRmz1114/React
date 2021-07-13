import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AlertModal = props => {

    const closeModalHandler = () =>{
        props.closeModal()
    }
    return(
        <React.Fragment>
            <Modal isOpen={props.toggle}>
                <ModalHeader>Warning</ModalHeader>
                <ModalBody>This user is allready registered</ModalBody>
                <ModalFooter><Button onClick={closeModalHandler} color="secondary">Close</Button></ModalFooter>
            </Modal>
        </React.Fragment>
    )
};

export default AlertModal