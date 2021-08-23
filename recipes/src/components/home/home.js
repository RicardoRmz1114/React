import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input } from "reactstrap";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa";
import dataContext from "../../store/data-context";
import "./home.css";
const Home = (props) => {
  const [state, setstate] = useState(props.recipes);
  let categories = props.recipes;

  const openModal = () => {
    props.openModal();
  };

  const deleteCategoryHandler = (cat) => {
    props.deleteCatModal(cat);
  };

  const inputSerachHandler = (event) => {
    if (event.target.value.trim() !== "") {
      console.log(event.target.value);
      const newArray = [...props.recipes];
      setstate((prevState) => {
        return props.recipes.filter((element) =>
          element.categorie
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
      });
    } else {
      setstate(props.recipes);
    }
  };

  useEffect(() => {
    setstate(props.recipes);
  }, [props.recipes]);

  return (
    <>
      <div className="plan__list">
        <div className="formInputSearch">
          <input onChange={inputSerachHandler} className="inputSearch" />
        </div>
        <div className="mainCard">
          <div className="add" onClick={openModal}>
            <IconContext.Provider value={{ className: "global-class-name" }}>
              <div>
                <FaPlus />
              </div>
            </IconContext.Provider>
          </div>
          <h1 className="titleFont">Recetas</h1>
          <div className="boxContainer">
            {state.length > 0 &&
              state.map((recipe) => (
                <div className="catBox" key={recipe.id}>
                  <Link
                    className="catBox2"
                    to={`allRecipes/${recipe.categorie}`}
                  >
                    <p className="text">{recipe.categorie}</p>
                  </Link>
                  <div
                    className="delIconCategory"
                    onClick={() => deleteCategoryHandler(recipe.categorie)}
                  >
                    <FaSkullCrossbones />
                  </div>
                </div>
              ))}
            {/* {state.map((element) => (
              <p>{element.categorie}</p>
            ))} */}
            {props.recipes.length === 0 && <h5>No tienes recetas agegadas</h5>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
