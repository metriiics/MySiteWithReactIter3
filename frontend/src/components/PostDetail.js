import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

export default function Post() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  async function fetchPost() {
    const response = await fetch(`http://127.0.0.1:8000/api/post/${slug}/`);
    const data = await response.json();
    setPost(data);
  }
  
  useEffect(() => {
    fetchPost();
  }, []);

  const rawContent = post[`post_content_${lang}`] || '';

  const contentWithFullMediaUrl = rawContent.replace(/src="\/media\//g, 'src="http://127.0.0.1:8000/media/');

  return (
    <div className="content-post-detail">
        <h3 className="title-post-detail">{post[`post_title_${lang}`]}</h3>
        <div className="post-content-detail" dangerouslySetInnerHTML={{ __html: contentWithFullMediaUrl }} />
    </div>
  );
}