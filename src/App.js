import './App.css';
import Login from './Pages/UserPages/Login';
import {Route,Routes,Navigate} from 'react-router-dom'
import SignUp from './Pages/UserPages/SignUp';
import Home from './components/Home';
import AddPost from './Pages/PostsPages/AddPost'
import UserPost from './Pages/PostsPages/UserPost'
import User from './components/User';
import ProtectedRoute from "./authorization/ProtectedRoute"
import PublicRoute from './authorization/PublicRoute';
import EditPost from './Pages/PostsPages/EditPost';
import Dashboard from './components/Dashboard/Dashboard';
import PostPage from './Pages/PostsPages/PostPage';


export const url="https://blohhub.onrender.com"
// export const url="http://localhost:8000"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <Home/>
          </PublicRoute>
        }/>
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>
        <Route path='/register' element={
          <PublicRoute>
          <SignUp/>
        </PublicRoute>
        }/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/user' element={
          <ProtectedRoute>
            <User/>
          </ProtectedRoute>
        }>
            <Route path='dashboard' element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }/>
            <Route path='addpost' element={
              <ProtectedRoute>
              <AddPost/>
            </ProtectedRoute>
            }/>
            <Route path='userpost' element={
              <ProtectedRoute>
              <UserPost/>
            </ProtectedRoute>
            }/>
            <Route path='editpost' element={
              <ProtectedRoute>
              <EditPost/>
            </ProtectedRoute>
            }/>
            <Route path='postPage/:id' element={
              <ProtectedRoute>
              <PostPage/>
            </ProtectedRoute>
            }/>
          </Route>
        <Route path='/*' element={<Navigate to='/login'/>}/>
      </Routes>
    </div>
  );
}

export default App;
