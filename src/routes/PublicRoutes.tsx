import { lazyImport } from "@utils/helpers";

const { AuthRoutes } = lazyImport(() => import("@features/auth"), "AuthRoutes");

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
