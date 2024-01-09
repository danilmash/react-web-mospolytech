import React, { useContext } from 'react';
import {useAuth} from '../contexts/AuthContext';
import { HOME_ROUTE, FORM_ROUTE, TRANSACTION_ROUTE, TABLE_ROUTE } from '../app/routes/config';
import type { MenuProps } from 'antd';
import { Menu, Button, Flex } from 'antd'
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
            <NavLink to={FORM_ROUTE}>Form</NavLink>
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
            key: 'table-link',
        },
    ])
  }


  return (
    <>
        <Flex align='center' justify='space-between'> 
            <Menu mode="horizontal" style={{width: '100%', justifyContent: 'center'}}  items={items} />
            <Button  onClick={isAuthenticated ? logout : login}>{isAuthenticated ? "Выйти" : 'Войти'}</Button>
        </Flex>
       
    </>
  );
};

export default NavBar;
