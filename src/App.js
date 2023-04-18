import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import NavBar from './Components/NavBar/NavBar';
import CreateRecipe from './Components/Pages/CreateRecipe';
import RecipePage from './Components/Pages/RecipePage';
import Box from '@mui/material/Box';
import ChoosePage from './Components/Pages/ChoosePage';
import RecipeProvider from './context/recipeContext';

const App = () => {
    return (
        <Router>
            <RecipeProvider app="App">
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
                        <Route exact path="/main" element={<MainPage />} />
                        <Route exact path="/" element={<MainPage />} />
                        <Route
                            exact
                            path="/createRecipe"
                            element={<CreateRecipe />}
                        />
                        <Route
                            exact
                            path="/choose-recipe"
                            element={<ChoosePage />}
                        />
                        <Route
                            exact
                            path="/recipe/:id"
                            element={<RecipePage />}
                        />
                    </Routes>
                </Box>
            </RecipeProvider>
        </Router>
    );
};

export default App;
