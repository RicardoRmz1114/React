import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Recipe = (props) => {
  const closeModal = () => {
    props.closeModal();
  };

  console.log(props.recipe);

  return (
    <>
      {props.recipe && (
        <Modal isOpen={props.modal}>
          <ModalHeader>{props.recipe.dish}</ModalHeader>
          <ModalBody>
            <h4>Ingredientes</h4>
            <ul>
              {props.recipe.ingredients.map((ing) => (
                <li>{ing.ingredient}</li>
              ))}
            </ul>
            <h4>Pasos</h4>
            <ol>
              {props.recipe.steps.map((ing) => (
                <li>{ing.step}</li>
              ))}
            </ol>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={closeModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default Recipe;
