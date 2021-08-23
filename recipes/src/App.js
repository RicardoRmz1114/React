import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Recipes from "./components/recipes/Recipes";
import { useState, useEffect } from "react";
import DataProvider from "./store/data-provider";
import AddCategorie from "./components/addCategorie/addCategorie";
import DeleteCategorie from "./components/deleteCategorie/deleteCategorie";
import DeleteRecipe from "./components/deleteRecipe/deleteRecipe";

var rcpsSelected = "";

function App() {
  const [modal, setModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);

  const [deleteRecipeModal, setDeleteRecipeModal] = useState();

  const [Categorie, setCategorie] = useState(null);

  const [nums, setnums] = useState(0);

  let recipes = [
    {
      id: 1,
      categorie: "Salsas",
      recipes: [
        {
          id: 1,
          dish: "Salsa verde",
          ingredients: [
            {
              id: 1,
              ingredient: "4 chiles serrano",
            },
            {
              id: 2,
              ingredient: "2 Chiles jalapeño",
            },
            {
              id: 3,
              ingredient: "5 tomates",
            },
            {
              id: 4,
              ingredient: "1/2 cebolla",
            },
          ],
          steps: [
            {
              id: 1,
              step: "Hervir los 6 chiles por 10 minutos",
            },
            {
              id: 2,
              step: "Licuar todos los ingredientes",
            },
            {
              id: 3,
              step: "Agregar sal al gusto",
            },
          ],
        },
        {
          id: 2,
          dish: "Salsa roja",
          ingredients: ["chile", "tomate", "cebolla"],
          steps: "",
        },
      ],
    },
    // {
    //   id: 2,
    //   categorie: "Postres",
    //   recipes: [
    //     {
    //       id: 1,
    //       dish: "Empanadas de piña",
    //       ingredients: ["harina", "piña"],
    //       steps: "",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   categorie: "Guisados",
    //   recipes: [
    //     {
    //       ingredients: [],
    //       steps: "",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   categorie: "Asados",
    //   recipes: [
    //     {
    //       ingredients: [],
    //       steps: "",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   categorie: "Cortes",
    //   recipes: [
    //     {
    //       ingredients: [],
    //       steps: "",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   categorie: "Dulces",
    //   recipes: [
    //     {
    //       ingredients: [],
    //       steps: "",
    //     },
    //   ],
    // },
    // {
    //   id: 7,
    //   categorie: "Licuados",
    //   recipes: [
    //     {
    //       ingredients: [],
    //       steps: "",
    //     },
    //   ],
    // },
  ];

  const [rcps, setRcps] = useState(recipes);

  const openModal = () => {
    console.log("open");
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openDeleteCategoryModal = (cat) => {
    setDeleteModal(true);
    setCategorie(cat);
    console.log("delete cat " + cat);
  };

  const closeDeleteCategoryModal = () => {
    setDeleteModal(false);
  };

  const openDeleteRecipeModal = () => {
    setDeleteRecipeModal(true);
  };

  const closeDeleteRecipeModal = () => {
    setDeleteRecipeModal(false);
  };

  const addCategorie = (title, description) => {
    setnums((state) => {
      return state + 1;
    });

    console.log(title, description);
    var number = Math.random(); // genera numero random
    number.toString(16); // se pasa a base hexadecimal
    var id = number.toString(36).substr(2, 9);
    const newCategorie = {
      id: id,
      categorie: title,
      recipes: [],
    };
    setRcps((prevState) => {
      console.log([...prevState, newCategorie]);
      return [...prevState, newCategorie];
    });
  };

  const deleteCategorie = (cat) => {
    setRcps((prevState) => {
      return prevState.filter((element) => element.categorie !== cat);
    });
  };

  const selectHandler = (recipe) => {
    rcpsSelected = recipe;
  };

  // let recipe;

  // if(rcps !== ''){
  //   recipe = <Recipes rcps={rcps} ></Recipes>;
  // }

  return (
    <div className="App">
      <DeleteRecipe
        openModal={openDeleteRecipeModal}
        toggle={deleteRecipeModal}
        closeModal={closeDeleteRecipeModal}
      />
      <DeleteCategorie
        deleteCategorie={deleteCategorie}
        categorie={Categorie}
        modal={deleteModal}
        closeModal={closeDeleteCategoryModal}
      />
      <AddCategorie
        modal={modal}
        closeModal={closeModal}
        addCategorie={addCategorie}
      ></AddCategorie>
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home
                nums={nums}
                recipes={rcps}
                selected={selectHandler}
                openModal={openModal}
                deleteCatModal={openDeleteCategoryModal}
              ></Home>
            </Route>
            <Route path="/allRecipes/:categorie" exact>
              <Recipes
                recipes={rcps}
                openModal={openDeleteRecipeModal}
              ></Recipes>
            </Route>
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
