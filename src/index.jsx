import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import RootLayout from "./layouts/RootLayout.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,          
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MoviesPage /> },              
      { path: "movies", element: <MoviesPage /> },            
      { path: "movies/:id", element: <MovieDetails /> },      
      { path: "watchlist", element: <WatchlistPage /> },      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);