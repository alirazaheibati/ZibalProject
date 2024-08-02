import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { MockPage } from "./Pages/MockPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainPage/>,
    },
    {
      path: "/Table",
      element:<MockPage/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
