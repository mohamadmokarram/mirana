import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home";
import FindJobPage from "./pages/findJob";
import FindHirePage from "./pages/findHire";
import AboutUsPage from "./pages/aboutUs";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/find-your-job", element: <FindJobPage /> },
  { path: "/find-your-hire", element: <FindHirePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
