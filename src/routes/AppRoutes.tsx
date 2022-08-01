import { lazyImport } from "@utils/helpers";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "@routes/PublicRoutes";
import Navbar from "@layouts/Navbar";
const { Home } = lazyImport(() => import("@features/home/routes/Home"), "Home");

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <Home /> }];

  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return (
    <>
      <Navbar />
      {element}
    </>
  );
};
