import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Recipe = () => {
    const location = useLocation();
    const { pathname } = location;
    const recipeId = pathname.split('/').pop();

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
            <RecipeDetails recipeId={recipeId} />
        </Box>
    );
};

export default Recipe;
