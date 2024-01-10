
import './App.css';
import Binarysearch from './components/Binarysearch';
import Displaying from './components/Displaying';
import Options from './components/Options';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Options/>} />
          <Route path='/display' element={<Displaying/>} />
        </Routes>
      </Router>
      {/* <Options/> */}
      {/* <Binarysearch/> */}
    </div>
  );
}

export default App;
