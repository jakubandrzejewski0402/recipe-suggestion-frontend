import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Pages/Welcome';
import NavBar from './Components/NavBar/NavBar';
import CreateRecipes from './Components/Pages/CreateRecipes';
import LatestRecipes from './Components/Pages/LatestRecipes';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/createReceip" element={<CreateRecipes />} />
                <Route exact path="/recipes" element={<LatestRecipes />} />
                <Route exact path="/recipe/:id" element={<LatestRecipes />} />
            </Routes>
        </Router>
    );
};

export default App;
