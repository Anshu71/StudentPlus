import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Landing from "./pages/landing";
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