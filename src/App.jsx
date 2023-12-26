import Cart from "./components/Cart";
import Products from "./components/Products";
import RootLayout from "./components/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/*" element={<div>No Page Found</div>} />,
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
