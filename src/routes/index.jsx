import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const allRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])
export default allRoutes