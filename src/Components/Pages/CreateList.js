import { Box } from '@mui/material';
import ListCreator from '../ListCreator/ListCreator';
import { useState } from 'react';
import RecipesChoose from '../ListCreator/RecipesChoose';

const CreateList = () => {
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
                <ListCreator
                    setOpenForm={setOpenForm}
                    setRecipes={setRecipes}
                />
            ) : (
                <RecipesChoose recipes={recipes} />
            )}
        </Box>
    );
};

export default CreateList;
