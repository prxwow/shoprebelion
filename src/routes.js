import { ABOUTAS_ROUTE, DEVSTORE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import AboutAs from "./pages/AboutAs";
import DevStore from "./pages/DevStore";



export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ABOUTAS_ROUTE,
        Component: AboutAs
    },
    {
        path: DEVSTORE_ROUTE,
        Component: DevStore
    },
]