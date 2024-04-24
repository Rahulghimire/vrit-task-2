import { Suspense } from "react";
import logo from "../assets/logo192.png";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../components/about/AboutUs";
import ContactUs from "../components/ContactUs";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Suspense
        fallback={
          <div className="bg-[#fff]">
            <img
              src={logo}
              className="m-auto flex h-screen w-52 items-center object-contain"
              alt="image not found"
            />
          </div>
        }
      >
        <AboutUs/>
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense
      fallback={
        <div className="bg-[#fff]">
          <img
            src={logo}
            className="m-auto flex h-screen w-52 items-center object-contain"
            alt="image not found"
          />
        </div>
      }
      >
      <ContactUs/>
      </Suspense>
    ),
  },
],{
  basename: "/",
  // future: {
  //   v7_normalizeFormMethod: true,
  // },
});

export default routers;
