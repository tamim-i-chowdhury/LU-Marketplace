import { Router, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import { router } from "./routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
