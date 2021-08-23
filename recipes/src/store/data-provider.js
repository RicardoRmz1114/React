import { useEffect, useState } from "react";

import dataContext from "./data-context";


const defaultDataState = {
    recipes: [],
    selectedRecipe: null
};

const DataProvider = props => {

    const [dataState,setDataState] = useState(defaultDataState);

    const selectRecipe = recipe => {
        setDataState({
            recipes: [],
            selectedRecipe: recipe
        })
        setDataState(state => {
            return state
        })
        console.log(recipe)
    }

    const dataCtx = {
        recipes: dataState.recipes,
        selectedRecipe: dataState.selectedRecipe,
        selectRecipe: selectRecipe
    }
    return(
        <dataContext.Provider value={dataCtx}> 
            {props.children}
        </dataContext.Provider>        
    )

};

export default DataProvider;