import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import RecipeList from '../RecipeList/RecipeList';

const MainPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page')) || 1;

    return (
        <Box
            style={{
                margin: '0 auto',
            }}
        >
            <RecipeList page={page} />
        </Box>
    );
};

export default MainPage;
