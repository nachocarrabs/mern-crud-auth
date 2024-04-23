import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <h1> Home </h1> } />
        <Route path="/login" element={ <h1> Login </h1> } />
        <Route path="/register" element={ <h1> Register </h1> } />
        <Route path="/tasks" element={ <h1> Tasks </h1> } />
        <Route path="/add-task" element={ <h1> Add tasks </h1> } />
        <Route path="/task/:id" element={ <h1> Update task </h1> } />
        <Route path="/profile" element={ <h1> Profile </h1> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App