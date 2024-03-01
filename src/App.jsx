
import { Home, Products, Info } from "~/pages";
import HeaderNav from "~/component/header/header-nav";
import { Icons } from "~/assets/icons";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/products/:id",
      element: <Products/>
    },
    {
      path: "/info/:category",
      element: <Info/>
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App;
