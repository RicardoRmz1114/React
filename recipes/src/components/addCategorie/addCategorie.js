import { useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const AddCategorie = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const titleRef = useRef();

  const closeModal = () => {
    props.closeModal();
  };

  const addCategorie = () => {
    props.addCategorie(
      titleRef.current.value.charAt(0).toUpperCase() +
        titleRef.current.value.slice(1).toLowerCase()
    );
    setIsDisabled(true);
    props.closeModal();
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    if (titleRef.current.value.trim() !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <>
      <div>
        <Modal isOpen={props.modal}>
          <ModalHeader>Agregar Categoria</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Nombre</Label>
                <Input
                  onChange={inputChangeHandler}
                  innerRef={titleRef}
                  type="text"
                  name="title"
                  id="title"
                />
              </FormGroup>
              {/* <FormGroup>
                            <Label for="exampleText">Descripcion</Label>
                            <Input innerRef={descriptionRef} type="textarea" name="text" id="exampleText" />
                        </FormGroup> */}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={closeModal}>
              Cerrar
            </Button>
            <Button
              color="success"
              onClick={addCategorie}
              disabled={isDisabled}
            >
              Agregar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default AddCategorie;
