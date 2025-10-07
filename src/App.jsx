import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import HomePage from "./pages/home";
import FindJobPage from "./pages/findJob";
import FindHirePage from "./pages/findHire";
import AboutUsPage from "./pages/aboutUs";
import Jobspage from "./pages/jobs";
import JobDetails from "./pages/jobDetails";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/find-your-job", element: <FindJobPage /> },
      { path: "/find-your-hire", element: <FindHirePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/jobs", element: <Jobspage /> },
      { path: "/jobs/:jobId", element: <JobDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
