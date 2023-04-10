import React, { useReducer, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import { BACKEND_URL } from '../../config/urls';
import { manageList } from './recipeReducer';
import {
    courseTypes,
    dietTypes,
    cuisineTypes,
    maxReadyTimes,
} from './recipeOptions';

const initListState = {
    course: '',
    dietType: '',
    cuisine: '',
    maxReadyTime: 30,
    description: '',
};

const RecipeCreator = ({ setOpenForm, setRecipes }) => {
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [listState, dispatchListState] = useReducer(
        manageList,
        initListState
    );

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

    const mapParams = {
        course: 'course_type',
        dietType: 'diet_type',
        cuisine: 'cuisine',
        maxReadyTime: 'max_ready_time',
        description: 'description',
    };

    const convertParamToUrl = (param, value) => {
        if (param === 'description' || param === 'maxReadyTime') return value;
        if (param === 'course') return courseTypes[value];
        if (param === 'dietType') return dietTypes[value];
        if (param === 'cuisine') return cuisineTypes[value];
    };

    const handleFindReceip = (event) => {
        event.preventDefault();
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        let url = `${BACKEND_URL}/recipe/option?page=1&page_size=6`;
        for (let param in listState) {
            if (listState[param]) {
                const valueToUrl = convertParamToUrl(param, listState[param]);
                url += `&${mapParams[param]}=${valueToUrl}`;
            }
        }
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setRecipes(res);
                setOpenForm(false);
                setLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setLoading(false);
            });
    };

    const handleLuckyShot = (event) => {
        event.preventDefault();
        setLoading(true);

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        let url = `${BACKEND_URL}/recipe/option/random`;
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setRecipes(res);
                setOpenForm(false);
                setLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setLoading(false);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {loading ? (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Avatar sx={{ m: 1, bgcolor: blue[600] }}>
                        <FoodBankIcon />
                    </Avatar>
                )}
                <Typography component="h1" variant="h5">
                    Create your list
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
                        Find receip
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
                {isError && (
                    <Box position="absolute">
                        <Alert
                            severity="error"
                            onClose={() => {
                                setIsError(false);
                            }}
                        >
                            Something went wrond - <strong>try again</strong>
                        </Alert>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default RecipeCreator;
