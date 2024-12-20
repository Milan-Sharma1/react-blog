import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import appwriteservice from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

const Editpost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteservice.getOnePost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default Editpost;
