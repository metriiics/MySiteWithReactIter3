import { useState, useEffect } from "react";

export default function Post() {
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchPost() {
    const response = await fetch("http://127.0.0.1:8000/api/post/");
    const data = await response.json();
    setPost(data);

    const allTags = data.flatMap(item => item.post_tags || []);
    const uniqueTags = [...new Set(allTags.map(tag => tag.trim()))];
    setTags(uniqueTags);
  }

  function generateId(tag) {
    return `filter-${tag.toLowerCase().replace(/\s+/g, '-')}`
  }

  useEffect(() => {
    fetchPost();
  }, []);

  function toggleTag(tag) {
    setSelectedTags(prev => 
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }

  const filteredPosts = post.filter(p => {
    if (selectedTags.length === 0) return true;
    const postTags = (p.post_tags || []).map(t => t.trim());

    return selectedTags.some(tag => postTags.includes(tag));
  }).filter(p => {
    if (!searchText.trim()) return true;
    return p.post_title.toLowerCase().includes(searchText.toLowerCase());
  })

  return (
    <div className="container">
        <div className="container-content-post">
            {filteredPosts.map((post) => (
                <div key={post.id} className="content-post-info">
                    <img src={post.post_image} alt="img" className="post-image" />
                    <div className="post-text">
                        <h3 className="title-post">{post.post_title}</h3>
                        <p className="data-post">{post.post_data}</p>
                        <div className="tags-post">
                            {(post.post_tags || []).map((tag, index) => (
                                <span key={index} className="post-tag-item">{tag.trim()}</span>
                            ))}
                        </div>
                        <p className="description-post">{post.post_description}</p>
                        <a href={post.post_link} className="link-post" target="_blank">Подробнее...</a>
                    </div>
                </div>
            ))}

        </div>

        <div className="search-bar">
            <form className="searchForm" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Введите название..." className="search-input" value={searchText} onChange={e => setSearchText(e.target.value)}/>
                <div className="filter-options">
                    {tags.map((tag, index) => (
                        <div className="filter-item" key={index}>
                            <input 
                                type="checkbox" 
                                id={generateId(tag)}
                                checked={selectedTags.includes(tag)}
                                onChange={() => toggleTag(tag)}
                            />
                            <label htmlFor={generateId(tag)}>{tag}</label>
                        </div>
                    ))}
                </div>
            </form>
        </div>

    </div>
  );
}