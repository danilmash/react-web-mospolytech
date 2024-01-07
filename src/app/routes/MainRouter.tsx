import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Home from "../../pages/HomePage";
import About from "../../pages/AboutPage";
import Developer from "../../pages/DeveloperPage";
import TablePage from "../../pages/TablePage";
import { HOME_ROUTE, ABOUT_ROUTE, DEVELOPER_ROUTE, TABLE_ROUTE } from './config';

const MainRouter = ({isAuth = false}) => {
    
  const basedPath: RouteObject[] = [
    { path: HOME_ROUTE, element: <Home />},
    { path: ABOUT_ROUTE, element: <About />},
    { path: "*", element: <Navigate to={'/'} replace />},
  ];

  const authPath: RouteObject[] = [
    { path: DEVELOPER_ROUTE , element: <Developer />,},
    { path: TABLE_ROUTE, element: <TablePage /> },
  ];

  const resultPaths: RouteObject[] = basedPath;
  
  if(isAuth){
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths);
}

export default MainRouter;