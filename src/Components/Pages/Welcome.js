import { Box } from '@mui/material';
import RecipeList from '../RecipeList/RecipeList';

const Welcome = () => {
    return (
        <Box
            style={{
                margin: '0 auto',
            }}
        >
            <RecipeList />
        </Box>
    );
};

export default Welcome;
