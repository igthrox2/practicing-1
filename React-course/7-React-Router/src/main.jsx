import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { PostLoader } from "./components/PostList.jsx";
import {CreatePostAction} from "./components/CreatePost.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const Router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    hydrateFallbackElement: <LoadingSpinner />,
    children:[
      {path : "/", element : <PostList /> , loader : PostLoader},
      {path : "/create-Post", element : <CreatePost /> , action: CreatePostAction },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = { Router } />
  </React.StrictMode>
);
