import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import { HOME_ROUTE, ABOUT_ROUTE, TRANSACTION_ROUTE, TABLE_ROUTE } from '../app/routes/config';
import type { MenuProps } from 'antd';
import { Menu, Button } from 'antd'
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const items: MenuProps['items'] = [
    {
        label: (
            <NavLink to={HOME_ROUTE}>Home</NavLink>
        ),
        key: 'home-link'
    },
    {
        label: (
            <NavLink to={ABOUT_ROUTE}>About</NavLink>
        ),
        key: 'about-link'
    },
  ]

  if (isAuthenticated) {
    items.push(...[
        {
            label: (
                <NavLink to={TRANSACTION_ROUTE}>Developer</NavLink>
            ),
            key: 'developer-link'
        },
        {
            label: (
                <NavLink to={TABLE_ROUTE}>Table</NavLink>
            ),
            key: 'table-link'
        },
    ])
  }
  items.push(
    {
        label: (
            <Button onClick={isAuthenticated ? logout : login}>{isAuthenticated ? "Выйти" : 'Войти'}</Button>
        ),
        key: 'auth-button'
    }
  )

  return (
    <>
        <Menu mode="horizontal" items={items} />
    </>
  );
};

export default NavBar;
