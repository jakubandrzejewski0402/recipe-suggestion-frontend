import React, { useReducer } from 'react';
import Avatar from '@mui/material/Avatar';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { manageList } from './recipeReducer';
import {
    courseTypes,
    dietTypes,
    cuisineTypes,
    maxReadyTimes,
} from '../RecipeChoose/recipeOptions.js';
import { SetRecipeState } from '../../context/recipeContext';

const initListState = {
    course: '',
    dietType: '',
    cuisine: '',
    maxReadyTime: 30,
    description: '',
};

const RecipeCreator = () => {
    const [listState, dispatchListState] = useReducer(
        manageList,
        initListState
    );
    const setRecipeState = SetRecipeState();
    const navigate = useNavigate();

    const handleCourseChange = (event) => {
        dispatchListState({
            type: 'CHANGE_COURSE',
            value: event.target.value,
        });
    };

    const handleDietChange = (event) => {
        dispatchListState({
            type: 'CHANGE_DIET_TYPE',
            value: event.target.value,
        });
    };

    const handleCuisineChange = (event) => {
        dispatchListState({
            type: 'CHANGE_CUISINE',
            value: event.target.value,
        });
    };

    const handleMaxReadyTimeChange = (event) => {
        dispatchListState({
            type: 'CHANGE_MAX_READY_TIME',
            value: event.target.value,
        });
    };

    const handleDescriptionChange = (event) => {
        dispatchListState({
            type: 'CHANGE_DESCRIPTION',
            value: event.target.value,
        });
    };

    const handleFindReceip = (event) => {
        event.preventDefault();
        setRecipeState(listState);
        navigate(`/choose-recipe?page=1&type=normal`);
    };

    const handleLuckyShot = (event) => {
        event.preventDefault();
        navigate(`/choose-recipe?page=1&type=lucky`);
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: blue[600] }}>
                    <FoodBankIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create your recipe
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="course-type">Course type</InputLabel>
                        <Select
                            labelId="course-type"
                            id="course-type"
                            value={listState.course}
                            label="Course type"
                            onChange={handleCourseChange}
                        >
                            {Object.keys(courseTypes).map((type) => (
                                <MenuItem value={type} key={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="diet-type">Diet type</InputLabel>
                        <Select
                            labelId="diet-type"
                            id="diet-type"
                            value={listState.dietType}
                            label="Diet type"
                            onChange={handleDietChange}
                        >
                            {Object.keys(dietTypes).map((type) => (
                                <MenuItem value={type} key={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="cuisine">Cuisine</InputLabel>
                        <Select
                            labelId="cuisine"
                            id="cuisine"
                            value={listState.cuisine}
                            label="Cuisine"
                            onChange={handleCuisineChange}
                        >
                            {Object.keys(cuisineTypes).map((type) => (
                                <MenuItem value={type} key={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="max-ready-time">
                            Max preparation time (minutes)
                        </InputLabel>
                        <Select
                            labelId="max-ready-time"
                            id="max-ready-time"
                            value={listState.maxReadyTime}
                            label="Max preparation time (minutes)"
                            onChange={handleMaxReadyTimeChange}
                        >
                            {maxReadyTimes.map((time) => (
                                <MenuItem value={time} key={time}>
                                    {time}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        fullWidth
                        name="description"
                        label="Description"
                        type="description"
                        id="description"
                        value={listState.description}
                        onChange={handleDescriptionChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleFindReceip}
                    >
                        Find recipe
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleLuckyShot}
                    >
                        Lucky shot
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RecipeCreator;
