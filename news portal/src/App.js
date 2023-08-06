
import { RouterProvider } from "react-router-dom";
import { router } from './components/Routers/Routers';
import AuthProvider from './AuthProvider/AuthProvider';


//https://dragon-new-client.web.app/
//node express server return process
/*
1.https://vercel.com/new?onboarding=true
2.https://vercel.com/docs/cli
3.https://andrewbaisden.medium.com/how-to-deploy-a-node-express-app-to-vercel-6fa567a041e2
4.final link : https://dragon-news-server-wine-one.vercel.app/AllNews
5.4 link distrubition your router ......locallink replecement

*/


function App() {


  return (
    <div className="App">

      {/* <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>

      </AuthProvider>
    </div>
  );
}

export default App;
