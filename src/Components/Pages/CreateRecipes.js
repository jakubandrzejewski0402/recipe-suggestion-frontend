import { Box } from '@mui/material';
import RecipeCreator from '../RecipeCreator/RecipeCreator';
import { useState } from 'react';
import RecipesChoose from '../RecipeCreator/RecipesChoose';

const CreateRecipes = () => {
    const [openForm, setOpenForm] = useState(true);
    const [recipes, setRecipes] = useState(null);
    return (
        <Box
            style={{
                position: 'absolute',
                top: -40,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {openForm ? (
                <RecipeCreator
                    setOpenForm={setOpenForm}
                    setRecipes={setRecipes}
                />
            ) : (
                <RecipesChoose recipes={recipes} />
            )}
        </Box>
    );
};

export default CreateRecipes;
