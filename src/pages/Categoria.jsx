import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams, useResolvedPath } from "react-router-dom";
import { buscar } from "../api/api";
import "../assets/css/blog.css";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import SubCategoria from "./Subcategoria";

const Categoria = () => {
    const { id } = useParams();
    const [subcategorias,setSubcategoria] = useState([]);

    useEffect(() => {
        buscar(`/categorias?id=${id}`,(response) => {
            setSubcategoria(response[0].subcategorias)
        });
    },[id]);

    const url = useResolvedPath("").pathname;

    return (<>
        <div className="container">
            <h2 className="title-page">Pet Noticias</h2>
        </div>
        <ListCategories />
        <ul className="category-list container flex">
        {
            subcategorias.map((subcategoria) => (
                <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                    <Link to={`${url}/${subcategoria}`}>
                        {subcategoria}
                    </Link>
                </li>
            ))
        }

        </ul>
        <Routes>
            <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`} />} />
            <Route path="/:subcategoria" element={<SubCategoria />} />
        </Routes>
        
    </>);
}
export default Categoria;