import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { FaSkullCrossbones } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import dataContext from "../../store/data-context";
import AddCategorie from "../addCategorie/addCategorie";
import AddRecipe from "../addRecipe/addRecipe";
import Recipe from "../recipe/recipe";
import "./Recipes.css";

const Recipes = (props) => {
  const [modal, setModal] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [modalViewRecipe, setModalViewRecipe] = useState(false);

  const ctx = useContext(dataContext);
  const params = useParams();
  const selectedRecipe = props.recipes.filter(
    (recipe) => recipe.categorie === params.categorie
  );
  console.log(selectedRecipe[0].recipes);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openRecipe = (recipe) => {
    setRecipe(recipe);
    setModalViewRecipe(true);
  };

  const closeRecipe = () => {
    setModalViewRecipe(false);
  };

  const addDish = (dish) => {
    selectedRecipe[0].recipes = [...selectedRecipe[0].recipes, dish];
    console.log(selectedRecipe);
  };

  const deleteRecipeModal = () => {
    props.openModal();
  };

  console.log(selectedRecipe);

  return (
    <>
      <Recipe
        modal={modalViewRecipe}
        closeModal={closeRecipe}
        recipe={recipe}
      ></Recipe>
      <AddRecipe
        modal={modal}
        closeModal={closeModal}
        addDish={addDish}
      ></AddRecipe>
      <div className="body">
        <h1 className="title">{selectedRecipe.categorie}</h1>
        <Link to="/" className="link">
          <IconContext.Provider value={{ className: "global-class-name" }}>
            <div className="back">
              <FaArrowLeft />
            </div>
          </IconContext.Provider>
          {/* <p className="back">{`< regresar`}</p> */}
        </Link>

        <div className="addRecipe" onClick={openModal}>
          <IconContext.Provider value={{ className: "global-class-name" }}>
            <div>
              <FaPlus />
            </div>
          </IconContext.Provider>
        </div>
        {/* <p >{`agregar`}</p> */}
        <h1 class="title">{selectedRecipe[0].categorie}</h1>
        {selectedRecipe[0].recipes && (
          <div className="recipeBox">
            {selectedRecipe[0].recipes.map((recipe) => (
              <div className="recipe">
                <div key={recipe.id} onClick={() => openRecipe(recipe)}>
                  <h1 className="dishName">{recipe.dish}</h1>
                </div>
                <div className="iconDelete">
                  <FaSkullCrossbones onClick={deleteRecipeModal} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Recipes;
