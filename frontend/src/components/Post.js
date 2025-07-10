import { useState, useEffect } from "react";

export default function Post() {
  const [post, setPost] = useState([]);

  async function fetchPost() {
    const response = await fetch("http://127.0.0.1:8000/api/post/");
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="container">
        <div className="container-content-post">
            {post.map((post) => (
                <div key={post.id} className="content-post-info">
                    <img src={post.post_image} alt="img" className="post-image" />
                    <div className="post-text">
                        <h3 className="title-post">{post.post_title}</h3>
                        <p className="data-post">{post.post_data}</p>
                        <div className="tags-post">
                            {(post.post_tags || []).map((tag, index) => (
                                <span key={index} className="post-tag-item">{tag.trim ? tag.trim() : tag}</span>
                            ))}
                        </div>
                        <p className="description-post">{post.post_description}</p>
                        <a href={post.post_link} className="link-post" target="_blank">Подробнее...</a>
                    </div>
                </div>
            ))}

        </div>

        <div className="search-bar">
            <form className="searchForm">
                <input type="text" placeholder="Введите название..." className="search-input"/>
                <div className="filter-options">
                    <label className="filter-label">
                        <input type="checkbox" /> C+
                    </label>
                    <label className="filter-label">
                        <input type="checkbox" /> Python
                    </label>
                    <label className="filter-label">
                        <input type="checkbox" /> Fortran
                    </label>
                </div>
            </form>
        </div>

    </div>
  );
}