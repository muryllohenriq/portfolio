import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Teste from "../pages/teste/Teste";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/teste",
        element: <Teste />
    },
]);

export default router;