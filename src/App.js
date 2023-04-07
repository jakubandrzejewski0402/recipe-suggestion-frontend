import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Pages/Welcome';
import NavBar from './Components/AppBar/NavBar';
import CreateList from './Components/Pages/CreateList';
import LatestLists from './Components/Pages/LatestLists';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/createList" element={<CreateList />} />
                <Route exact path="/lists" element={<LatestLists />} />
            </Routes>
        </Router>
    );
};

export default App;
