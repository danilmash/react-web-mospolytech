import styled from "styled-components";
import { FC } from "react";

export interface IUniversity {
    country: string;
    name: string;
}

const CardStyled = styled.div`  
    display: flex;
    width: 100%;
    max-width: 500px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: #e9e7e7;
    color: red;
`

const CardHeader = styled.div`
    font-size: 1.2rem;
    max-width: 300px;
`

const CardUniversity: FC<{ data: IUniversity }> = ({data}) => (
    <CardStyled>
        <CardHeader>{data.name}</CardHeader>
        <span>{data.country}</span>
    </CardStyled>
)

export default CardUniversity;