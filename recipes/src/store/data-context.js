import React from 'react';

const dataContext = React.createContext({
    recipes: [],
    selectedRecipe: null,
    selectRecipe: (recipe) => {}
});

export default dataContext;