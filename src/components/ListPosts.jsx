import "../assets/css/componentes/card.css";
import { buscar } from "../api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPosts = ({url}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        buscar(url, setPost);
    }, [url]);

    return (

        <section className="posts container">
        {post.map((post) => {
            const {id, title, metadescription,categoria } = post;
            return (
                <Link to={`/posts/${id}`} key={id} className={`post__card post-card--${categoria}`}>
                    <article>
                        <h3 className="post-card__title">{title}</h3>
                        <p className="post-card__meta">{metadescription}</p>
                    </article>
                </Link>
            );
        })
        }
        </section>
    );
}

export default ListPosts;
