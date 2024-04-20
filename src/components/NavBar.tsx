import React, { ReactNode, useContext } from 'react';
import {useAuth} from '../contexts/AuthContext';
import { HOME_ROUTE, FORM_ROUTE, TRANSACTION_ROUTE, TABLE_ROUTE, DYNAMIC_ROUTE } from '../app/routes/config';
import type { MenuProps } from 'antd';
import { Menu, Button, Flex, ConfigProvider } from 'antd'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavBarWrapper = styled(Flex)`
    height: 56px;
`
const MyMenu = styled(Menu)`
    background: transparent;
    border: none;
` 

const MyHeader = styled.div`
    background: var(--primaryBg); 
    border-bottom: var(--primaryBgDark) 2px solid;
    transition: 0.3s;
`

interface NavBarProps {
    children : ReactNode
}

const NavBar: React.FC<NavBarProps> = ({children}) => {
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
        {
            label: (
                <NavLink to={DYNAMIC_ROUTE}>DynamicPagination</NavLink>
            ),
            key: 'dynamic-link'
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
           <MyHeader>
             <NavBarWrapper className='wrapper' align='center' justify='space-between'>
                    {children}
                    <ConfigProvider theme={{components: {Menu: {horizontalLineHeight: '56px'}}}}>
                        <MyMenu mode="horizontal" style={{width: '100%', justifyContent: 'center'}}  items={items} />
                    </ConfigProvider >
                    <Button  onClick={isAuthenticated ? logout : login}>{isAuthenticated ? "Выйти" : 'Войти'}</Button>
             </NavBarWrapper>
           </MyHeader>
        
        </>
    );
};

export default NavBar;
