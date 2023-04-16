import { createContext, useContext, useState } from 'react';

const recipeContext = createContext();
const setRecipeContext = createContext();

export const UseRecipeState = () => {
    const context = useContext(recipeContext);
    if (!context) {
        throw new Error('you have to use context inside provider');
    }
    return context;
};

export const SetRecipeState = () => {
    const context = useContext(setRecipeContext);
    if (!context) {
        throw new Error('you have to use context inside provider');
    }
    return context;
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
