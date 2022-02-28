import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Main from './views/main';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
