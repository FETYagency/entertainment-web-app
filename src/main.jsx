import React from "react";
import ReactDOM from "react-dom/client";
import store from "./services/store/store.js";
import { Provider } from "react-redux";
import { GET } from "./services/features/content.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import Home from "./pages/home.jsx";
import TvSeries from "./pages/tvSeries.jsx";
import "./index.css";
import Movies from "./pages/movies.jsx";
import BookMarkes from "./pages/bookmarked.jsx";
import Login, { action as loginAction } from "./pages/login.jsx";
import Signup, { action as signUpAction } from "./pages/signup.jsx";
const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/signUp",
    element: <Signup />,
    action: signUpAction,
  },
  {
    path: "/Home",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/Home/movies",
        element: <Movies />,
      },
      {
        path: "/Home/TvSeries",
        element: <TvSeries />,
      },
      {
        path: "/Home/bookmarks",
        element: <BookMarkes />,
      },
    ],
  },
]);
store.dispatch(GET());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={ROUTER} />
    </Provider>
  </React.StrictMode>,
);
