import {FC, useEffect, useState} from "react";
import {IUniversity} from "../components/UniversityCard";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import CardUniversity from "../components/UniversityCard";
import styled from "styled-components";

const LIMIT_UNIVERSITIES = 15
const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const BlockObserver = styled.div`
    height: 40px;
    background-color: black;
`

const DynamicPagination: FC = () => {
    const [universities, setUniversities] = useState<Array<IUniversity>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const {ref, inView} = useInView({
        threshold: 1.0,
    }); 

    useEffect(() => {
        if (inView) {
            setCurrentPage((prev) => prev + 1)
        }
    }, [inView]);

    const fetchUniversities = async () => {
        try {
            setLoading(true)
            const offset = (currentPage - 1) * LIMIT_UNIVERSITIES // Укажите свой лимит в константах компонента
            const {data} = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`)
            console.log(data.length)
            setUniversities((prev) => [...prev, ...data])
        } catch (error) {
            console.log('Error fetching univer...', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUniversities()
    }, [currentPage])

    return (
        <ListStyled>
            <h1>List Universities</h1>
            {
                universities.map((university) => (
                    <CardUniversity data={university} key={university.name}></CardUniversity>
                ))
            }
            {loading && <div>Загрузка...</div>}
            {!loading && <BlockObserver ref={ref}></BlockObserver>}
        </ListStyled>
    )
}


export default DynamicPagination