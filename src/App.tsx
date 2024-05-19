import NavBar from "./components/NavBar";
import MainRouter from "./app/routes/MainRouter";
import { useAuth } from "./contexts/AuthContext";
import { Button, ConfigProvider } from "antd";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import { ThemeConfig } from "antd/es/config-provider/context";

function App() {
  const [appTheme, setAppTheme] = useState<ThemeConfig>(lightTheme);
  const changeTheme = () => {
    let newTheme = null;
    if (appTheme === darkTheme) {
      newTheme = lightTheme;
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      newTheme = darkTheme;
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setAppTheme(newTheme);
  };
  if (!document.documentElement.getAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", "light");
  }
  const { isAuthenticated } = useAuth();
  return (
    <>
      <ConfigProvider theme={appTheme}>
        <NavBar>
          <Button onClick={changeTheme}>Сменить тему</Button>
        </NavBar>
        <div className="wrapper">
          <MainRouter isAuth={isAuthenticated} />
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;
