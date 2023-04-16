import { Box } from '@mui/material';
import RecipeList from '../RecipeList/RecipeList';

const MainPage = () => {
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

export default MainPage;
