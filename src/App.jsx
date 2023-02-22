import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';

const App = () => {

  return (
  <>
  <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route exact path='/' element={<Welcome/>}/>
    <Route exact path='/Catalogue' element={<ItemListContainer/>}/>
    <Route exact path='/Category/:category' element={<ItemListContainer/>}/>
    <Route exact path='/Item/:id' element={<ItemDetailContainer/>}/>
    <Route exact path='/Cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
};

export default App;