import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/basicLayout/Main";

export  const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>
}

])