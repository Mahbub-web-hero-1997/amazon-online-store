import { Route, Routes } from 'react-router-dom';
import Header from './Components/Share/Header/Header';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Routes>
        {/* <Route path='/' element={<Shop></Shop>}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
