import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TasksFormPage from "./pages/TasksFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
            <Route element={<ProtectedRoute/>} >
              <Route path="/tasks" element={ <TasksPage/> } />
              <Route path="/add-task" element={ <TasksFormPage/> } />
              <Route path="/tasks/:id" element={ <TasksFormPage/> } />
              <Route path="/profile" element={ <ProfilePage/> } />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App