import React, { useState, useEffect } from "react";
import appwriteservice from "../appwrite/config";
import { Container, PostCard } from "../components";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteservice.getAllPost().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;