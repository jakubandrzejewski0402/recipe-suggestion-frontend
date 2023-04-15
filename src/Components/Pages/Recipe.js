import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Recipe = () => {
    const { id } = useParams();

    return (
        <Box
            style={{
                margin: '0 auto',
            }}
        >
            <RecipeDetails recipeId={id} />
        </Box>
    );
};

export default Recipe;
