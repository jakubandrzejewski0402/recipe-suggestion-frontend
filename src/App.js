import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Pages/Welcome';
import NavBar from './Components/NavBar/NavBar';
import CreateRecipes from './Components/Pages/CreateRecipes';
import Recipe from './Components/Pages/Recipe';
import Box from '@mui/material/Box';

const App = () => {
    return (
        <Router>
            <Box
                style={{
                    display: 'flex',
                    margin: '12px',
                    padding: '12px',
                    gap: '12px',
                }}
            >
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route
                        exact
                        path="/createRecipe"
                        element={<CreateRecipes />}
                    />
                    <Route exact path="/recipe/:id" element={<Recipe />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default App;
