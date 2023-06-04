import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Webdev from "./pages/Webdev/Webdev";
import Landing from "./pages/landing";
import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/webdev",
    element: <Webdev />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;