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

const DeleteCategorie = (props) => {
  const closeModal = () => {
    props.closeModal();
  };

  const deleteCategorie = () => {
    // console.log(props.categorie);
    props.deleteCategorie(props.categorie);
    props.closeModal();
  };
  return (
    <>
      <Modal isOpen={props.modal}>
        <ModalHeader>Eliminar categoria</ModalHeader>
        <ModalBody>
          <p>
            ¿Deseas eliminar la categoria <strong>"{props.categorie}"</strong>?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} color="danger">
            Cerrar
          </Button>
          <Button onClick={deleteCategorie} color="success">
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteCategorie;
