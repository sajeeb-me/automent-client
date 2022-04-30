import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import PageLoading from './Pages/PageLoading/PageLoading';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';
import UpdateItems from './Pages/UpdateItems/UpdateItems';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/inventories/:id' element={
          <RequireAuth>
            <UpdateItems />
          </RequireAuth>
        } />
        <Route path='/inventories/manage' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        } />
        <Route path='/inventories/add' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        } />
        <Route path='/inventories/my' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loading' element={<PageLoading />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
