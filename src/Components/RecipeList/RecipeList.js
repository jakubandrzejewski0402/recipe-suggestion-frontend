import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appConfig } from '../../config';
import { blue } from '@mui/material/colors';
import {
    CircularProgress,
    Box,
    CardActions,
    Button,
    Typography,
    Card,
    Pagination,
    CardHeader,
    Avatar,
    CardMedia,
    Grid,
} from '@mui/material';

const RecipeList = ({ page }) => {
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
        const url = `${appConfig.BACKEND_URL}/saved-recipe?page=${page}&page_size=8`;

        setLoading(true);
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setRecipes(res);
                setLoading(false);
            });
    }, [page]);

    const RecipeCard = ({ id, name, image_url, creator_username }) => {
        return (
            <Card sx={{ width: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                            {creator_username[0]}
                        </Avatar>
                    }
                    title={name}
                    subheader={creator_username}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image_url}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <Button
                        sx={{ marginLeft: 'auto' }}
                        onClick={() => {
                            navigate(`/recipe/${id}`);
                        }}
                    >
                        DETAILS
                    </Button>
                </CardActions>
            </Card>
        );
    };

    return (
        <Box
            sx={{
                marginTop: 8,
            }}
        >
            {loading ? (
                <Box
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Box>
                    <Typography
                        sx={{
                            display: 'flex',
                            textAlign: 'center',
                            justifyContent: 'center',
                            color: blue[500],
                            marginTop: 0,
                        }}
                        variant="h4"
                        gutterBottom
                    >
                        List of latest recipes...
                    </Typography>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        spacing={{ xs: 2, md: 8 }}
                    >
                        {recipes?.map(
                            ({ id, name, creator_username, image_url }) => {
                                return (
                                    <Grid item key={id}>
                                        <RecipeCard
                                            id={id}
                                            name={name}
                                            image_url={image_url}
                                            creator_username={creator_username}
                                        />
                                    </Grid>
                                );
                            }
                        )}
                    </Grid>
                    <Pagination
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        count={10}
                        page={page}
                        color="primary"
                        onChange={(_, page) => {
                            navigate(`/main?page=${page}`);
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

export default RecipeList;
