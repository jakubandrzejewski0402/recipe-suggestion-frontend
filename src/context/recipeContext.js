import { createContext, useContext, useState } from 'react';

const recipeContext = createContext();
const setRecipeContext = createContext();

export const UseRecipeState = () => {
    return useContext(recipeContext);
};

export const SetRecipeState = () => {
    return useContext(setRecipeContext);
};

const RecipeProvider = ({ children }) => {
    const [recipe, setRecipes] = useState(null);

    return (
        <recipeContext.Provider value={recipe}>
            <setRecipeContext.Provider value={setRecipes}>
                {children}
            </setRecipeContext.Provider>
        </recipeContext.Provider>
    );
};

export default RecipeProvider;
