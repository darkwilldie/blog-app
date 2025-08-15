import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { getPosts, deletePost } from "../services/blogService";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id).then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      });
    }
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                <Link to={`/post/${post.id}`}>
                  <Button variant="primary" className="me-2">
                    View
                  </Button>
                </Link>
                <Link to={`/edit/${post.id}`}>
                  <Button variant="secondary" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
