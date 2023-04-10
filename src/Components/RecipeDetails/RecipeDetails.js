import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../config/urls';
import { CircularProgress } from '@mui/material';

const RecipeDetails = ({ recipeId }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = `${BACKEND_URL}/recipe/option/${recipeId}`;

        setLoading(true);
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setDetails(res);
                setLoading(false);
            });
    }, []);

    console.log(loading);
    return loading ? (
        <CircularProgress />
    ) : (
        <div>
            <h1>{details?.title}</h1>
            <img src={details?.image} alt="Recipe"></img>
        </div>
    );
};

export default RecipeDetails;
