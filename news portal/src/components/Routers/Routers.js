import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categoty from "../Pages/Category/Categoty";
import Home from '../Pages/Home/Home'
import Logain from "../Pages/Logain/Logain";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import TramsAndCondition from "../TramsAndConditions/TramsAndCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => { return fetch('https://dragon-news-server-wine-one.vercel.app/AllNews') }
            },
            {
                path: '/category/:id',
                element: <Categoty></Categoty>,
                loader: (props) => {

                    const newsId = props.params.id;
                    const semiReplace = newsId.replace(":", "")

                    return fetch(`https://dragon-news-server-wine-one.vercel.app/category/${semiReplace}`)

                }




            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: (props) => { return fetch(`https://dragon-news-server-wine-one.vercel.app/news/${props.params.id}`) }
            },
            {
                path: '/login',
                element: <Logain></Logain>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/trams',
                element: <TramsAndCondition></TramsAndCondition>
            }
        ]
    }


])