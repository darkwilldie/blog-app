import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, Spinner } from 'react-bootstrap';
import { getPost } from '../services/blogService';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getPost(parseInt(id)).then((response) => {
      setPost(response);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <Card className="card-acrylic">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By {post.author}</Card.Subtitle>
        <Card.Text>{post.content}</Card.Text>
        <Link to={`/edit/${post.id}`}>
          <Button variant="primary">Edit Post</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostDetails;