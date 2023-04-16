import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import RecipeChoose from '../RecipeChoose/RecipeChoose';

const ChoosePage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');
    const page = parseInt(searchParams.get('page'));

    return (
        <Box
            style={{
                margin: '0 auto',
            }}
        >
            <RecipeChoose type={type} page={page} />
        </Box>
    );
};

export default ChoosePage;
