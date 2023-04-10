import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Pages/Welcome';
import NavBar from './Components/NavBar/NavBar';
import CreateRecipes from './Components/Pages/CreateRecipes';
import LatestRecipes from './Components/Pages/LatestRecipes';
import Recipe from './Components/Pages/Recipe';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/createRecipe" element={<CreateRecipes />} />
                <Route exact path="/recipe/:id" element={<Recipe />} />
                <Route exact path="/recipes" element={<LatestRecipes />} />
            </Routes>
        </Router>
    );
};

export default App;
