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

const DeleteRecipe = (props) => {
  const deleteRecipe = () => {
    props.closeModal();
  };

  const closeModal = () => {
    props.closeModal();
  };
  return (
    <>
      <Modal isOpen={props.toggle}>
        <ModalHeader>Eliminar receta</ModalHeader>
        <ModalBody>
          <p>¿Deseas eliminar esta receta ?</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} color="danger">
            Cerrar
          </Button>
          <Button onClick={deleteRecipe} color="success">
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteRecipe;
