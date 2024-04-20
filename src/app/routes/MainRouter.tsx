import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Home from "../../pages/HomePage";
import Form from "../../pages/FormPage";
import TransactionTable from "../../pages/TransactionPage";
import TablePage from "../../pages/TablePage";
import DynamicPagination from "../../pages/DynamicPaginationPage";
import { HOME_ROUTE, FORM_ROUTE, TRANSACTION_ROUTE, TABLE_ROUTE, DYNAMIC_ROUTE } from './config';

const MainRouter = ({isAuth = false}) => {
    
  const basedPath: RouteObject[] = [
    { path: HOME_ROUTE, element: <Home />},
    { path: FORM_ROUTE, element: <Form />},
    { path: DYNAMIC_ROUTE, element: <DynamicPagination />},
    { path: "*", element: <Navigate to={'/'} replace />},
  ];

  const authPath: RouteObject[] = [
    { path: TRANSACTION_ROUTE , element: <TransactionTable />,},
    { path: TABLE_ROUTE, element: <TablePage /> },
  ];

  const resultPaths: RouteObject[] = basedPath;
  
  if(isAuth){
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths);
}

export default MainRouter;