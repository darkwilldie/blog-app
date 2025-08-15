
let posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
    author: 'John Doe',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.',
    author: 'Jane Smith',
    createdAt: new Date().toISOString(),
  },
];

let nextId = 3;

export const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...posts]);
    }, 500);
  });
};

export const getPost = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.find((post) => post.id === id));
    }, 500);
  });
};

export const addPost = (post) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost = { ...post, id: nextId++, createdAt: new Date().toISOString() };
      posts.push(newPost);
      resolve(newPost);
    }, 500);
  });
};

export const updatePost = (id, updatedPost) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        posts[index] = { ...posts[index], ...updatedPost };
        resolve(posts[index]);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

export const deletePost = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts = posts.filter((post) => post.id !== id);
      resolve(true);
    }, 500);
  });
};
