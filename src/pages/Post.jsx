import { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { buscar } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

const Post = ({url}) => {
    const {id} = useParams();

    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch((error) => {
            navigate('/no-post-found');
        });
    }, [id]);

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    );
}
export default Post;