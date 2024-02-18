import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SplashScreen from './components/splashScreen';
import Experiments from './components/experiments/experiments';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route element={<Home />}>
          <Route path='/home' element={<Resume />} />
          <Route path='/experiments' element={<Experiments />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
