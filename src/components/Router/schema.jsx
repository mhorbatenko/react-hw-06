
import { createBrowserRouter } from "react-router-dom";

import Home from "../Home";
import Popular from '../Popular/Popular'
import Battle from "../Battle/Battle";
import Layout from "../Layout/index";
import Results from "../Battle/Results";

const routerSchema = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/popular',
          element: <Popular />
        },
        {
          path: '/battle',
          element: <Battle />
        },
        {
          path: '/battle/results',
          element: <Results />
        },
      ]
    }
  ])

export default routerSchema