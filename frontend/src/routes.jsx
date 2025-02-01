import Booking from "./pages/Booking";
import Auth from "./pages/Auth";
import Ticket from "./pages/Ticket";
import Station from "./pages/Station";
import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BOOKING_ROUTE, REGISTRATION_ROUTE, STATION_ROUTE, TICKET_ROUTE, LOGIN_ROUTE } from "./utils/consts";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: TICKET_ROUTE,
        Component: Ticket
    },

]

export const publicRoutes = [
    {
        path: BOOKING_ROUTE,
        Component: Booking
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: STATION_ROUTE,
        Component: Station
    },

]