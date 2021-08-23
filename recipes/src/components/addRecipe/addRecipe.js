import React, { useRef, useState } from "react";
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

import "./addRecipe.css";
const AddRecipe = (props) => {
  const [nameIsValid, setNameIsValid] = useState(false);
  const [ing, setIng] = useState([]);
  const [steps, setSteps] = useState([]);
  const [isValid, setIsValid] = useState();
  const [ingValid, setIngValid] = useState();

  const nameInputRef = useRef();
  const ingredientInputRef = useRef();
  const stepsInputRef = useRef();

  const ingredients = [];

  console.log(isValid);

  const addIngredients = () => {
    if (ingValid) {
      var number = Math.random(); // 0.9394456857981651
      number.toString(36); // '0.xtis06h6'
      var id = number.toString(36).substr(2, 9); // 'xtis06h6'
      setIng((prevState) => {
        return [
          ...prevState,
          {
            id: id,
            ingredient: ingredientInputRef.current.value,
          },
        ];
      });
      ingredientInputRef.current.value = "";
      setIngValid(false);
      console.log(ing);
    }
  };

  const addSteps = () => {
    if (isValid) {
      var number = Math.random(); // 0.9394456857981651
      number.toString(36); // '0.xtis06h6'
      var id = number.toString(36).substr(2, 9); // 'xtis06h6'
      setSteps((prevState) => {
        return [
          ...prevState,
          {
            id: id,
            step: stepsInputRef.current.value,
          },
        ];
      });
    }
  };

  const changeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim() === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const ingredientsChangeHandler = (event) => {
    if (event.target.value.trim() === "") {
      setIngValid(false);
    } else {
      setIngValid(true);
    }
  };

  const deleteSteps = (itemId) => {
    console.log(itemId);
    setSteps((prevState) => {
      return prevState.filter((element) => element.id !== itemId);
    });
  };

  const deleteIngredient = (id) => {
    setIng((prevState) => {
      return prevState.filter((element) => element.id != id);
    });
  };

  const closeModal = () => {
    props.closeModal();
  };

  const addDish = () => {
    var number = Math.random(); // genera numero random
    number.toString(16); // se pasa a base hexadecimal
    var id = number.toString(36).substr(2, 9);
    const recipe = {
      id: id,
      dish: nameInputRef.current.value,
      ingredients: ing,
      steps: steps,
    };

    props.addDish(recipe);
    nameInputRef.current.value = "";
    ingredientInputRef.current.value = "";
    stepsInputRef.current.value = "";
    setIsValid(false);
    setIngValid(false);
    setIng([]);
    setSteps([]);
    closeModal();
    setNameIsValid(false);
  };

  const nameChangeHandler = (event) => {
    if (event.target.value.trim() !== "") {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const validForm = !nameIsValid;

  return (
    <>
      <Modal isOpen={props.modal}>
        <ModalHeader>Agregar Platillo</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Nombre</Label>
              <Input
                onChange={nameChangeHandler}
                innerRef={nameInputRef}
                type="text"
                name="title"
                id="title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Ingredientes</Label>
              <Input
                onChange={ingredientsChangeHandler}
                innerRef={ingredientInputRef}
                type="text"
                name="text"
                id="exampleText"
              />
            </FormGroup>
            <p
              onClick={addIngredients}
              className={ingValid ? "addItem" : "addItemDisabled"}
            >
              Agregar
            </p>
            <div className={ing.length === 0 ? "" : "steps"}>
              <ul>
                {ing.map((item) => (
                  <div className="elements">
                    <li key={item.id}>{item.ingredient}</li>
                    <p
                      className="deleteElement"
                      onClick={() => deleteIngredient(item.id)}
                    >
                      x
                    </p>
                  </div>
                ))}
              </ul>
            </div>
            <FormGroup>
              <Label for="exampleText">Pasos</Label>
              <Input
                onChange={changeHandler}
                innerRef={stepsInputRef}
                type="text"
                name="text"
                id="exampleText"
              />
            </FormGroup>
            <p
              onClick={addSteps}
              className={isValid ? "addItem" : "addItemDisabled"}
            >
              Agregar
            </p>
            <div className={steps.length === 0 ? "" : "steps"}>
              <ol type="1">
                {steps.map((item) => (
                  <div className="elements">
                    <li key={item.id}>{item.step}</li>
                    <p
                      onClick={() => deleteSteps(item.id)}
                      className="deleteElement"
                    >
                      x
                    </p>
                  </div>
                ))}
              </ol>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} color="danger">
            Cerrar
          </Button>
          <Button color="success" onClick={addDish} disabled={validForm}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddRecipe;
