import { About } from "../page/About/about";
import { NotFound } from "../page/NotFound/notFound";
import { Home } from "../page/home/home";
import { Profile } from "../page/Profile/profile";
import { Favourite } from "../page/Favourite/favourite";
import { Cart } from "../page/Cart/cart";
import { Tel } from "../page/Tel";
import { Notebook } from "../page/Notebook/notebook";
import { SteeringWheel } from "../page/steeringWheel/steeringWheel";
import { Computers } from "../page/Computers/computers";
import { WashingM } from "../page/WashingM/washingM";
import { Sport } from "../page/Sport/sport";
import { SingelProduct } from "../page/SingleProduct";


export const mainPage = [
    {
        component: <Home />,
        path: "/"
    },
    {
        component: <About />,
        path: "/about"
    },
    {
        component: <Profile />,
        path: "/profile"
    },
    {
        component: <Favourite />,
        path: "/favourite"
    },
    {
        component: <Favourite />,
        path: "/favourite"
    },
    {
        component: <Cart />,
        path: "/cart"
    },
    {
        component: <Tel />,
        path: "/phones"
    },
    {
        component: <Notebook />,
        path: "/notebook"
    },
    {
        component: <SteeringWheel />,
        path: "/SteeringWheel"
    },
    {
        component: <Computers />,
        path: "/computers"
    },
    {
        component: <WashingM />,
        path: "/washingM"
    },
    {
        component: <Sport />,
        path: "/sport"
    },
    {
        component: <SingelProduct />,
        path: "/singelProduct"
    },
    {
        component: <NotFound />,
        path: "*"
    },
]