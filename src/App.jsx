import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  BubbleChat,
  CatImage,
  ErrorPages,
  ImageBad,
  ImagesGood,
  PagesTwoBad,
  PagesTwoGood,
  Question,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      name: "landinghome",
      element: <Question />,
    },
    {
      path: "/bubbleChat",
      name: "landinghome",
      element: <BubbleChat />,
    },
    {
      path: "/pages2good",
      name: "pages2good",
      element: <PagesTwoGood />,
    },
    {
      path: "/imagegood",
      name: "imagegood",
      element: <ImagesGood />,
    },
    {
      path: "/imagebad",
      name: "imagebad",
      element: <ImageBad />,
    },
    {
      path: "/catimage",
      name: "catimage",
      element: <CatImage />,
    },

    {
      path: "/pages2bad",
      name: "pages2bad",
      element: <PagesTwoBad />,
    },
    {
      path: "*",
      name: "*",
      element: <ErrorPages />,
      errorElement: <ErrorPages />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
