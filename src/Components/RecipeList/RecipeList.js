import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appConfig } from '../../config';
import {
    CircularProgress,
    Box,
    Button,
    CardActions,
    CardContent,
    Typography,
    Card,
} from '@mui/material';

const RecipeList = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = `${appConfig.BACKEND_URL}/recipe?page=1&page_size=12`;

        setLoading(true);
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setRecipes(res);
                setLoading(false);
            });
    }, []);

    const handleClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                width: '400px',
            }}
        >
            {loading ? (
                <CircularProgress />
            ) : (
                recipes?.map((recipe) => {
                    return (
                        <Box style={{ marginBottom: 10 }}>
                            <Card
                                variant="outlined"
                                style={{ width: '100%', height: 150 }}
                            >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {recipe.name}
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        {recipe.creator_username}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                    }}
                                >
                                    <Button
                                        size="small"
                                        onClick={() => handleClick(recipe.id)}
                                    >
                                        Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    );
                })
            )}
        </Box>
    );
};

export default RecipeList;
