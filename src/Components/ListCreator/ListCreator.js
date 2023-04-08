import React, { useReducer } from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import { manageList } from './listReducer';
import {
    courseTypes,
    dietTypes,
    cousineTypes,
    maxReadyTimes,
} from './listOptions';

const initListState = {
    course: '',
    dietType: '',
    cousine: '',
    maxReadyTime: 30,
    description: '',
};

const ListCreator = () => {
    const [listState, dispatchListState] = useReducer(
        manageList,
        initListState
    );

    const handleCourseChange = (event) => {
        dispatchListState({ type: 'CHANGE_COURSE', value: event.target.value });
    };

    const handleDietChange = (event) => {
        dispatchListState({
            type: 'CHANGE_DIET_TYPE',
            value: event.target.value,
        });
    };

    const handleCousineChange = (event) => {
        dispatchListState({
            type: 'CHANGE_COUSINE',
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
        console.log({
            course: listState.course,
            dietType: listState.dietType,
            cousine: listState.cousine,
            time: listState.maxReadyTime,
            description: listState.description,
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
                <Avatar sx={{ m: 1, bgcolor: blue[600] }}>
                    <FoodBankIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create your list
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleFindReceip}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="course-type">Course type</InputLabel>
                        <Select
                            labelId="course-type"
                            id="course-type"
                            value={listState.course}
                            label="Course type"
                            onChange={handleCourseChange}
                        >
                            {courseTypes.map((type) => (
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
                            {dietTypes.map((type) => (
                                <MenuItem value={type} key={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="cousine">Cousine</InputLabel>
                        <Select
                            labelId="cousine"
                            id="cousine"
                            value={listState.cousine}
                            label="Cousine"
                            onChange={handleCousineChange}
                        >
                            {cousineTypes.map((type) => (
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
                    >
                        Find receip
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled
                    >
                        Lucky shot
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ListCreator;
