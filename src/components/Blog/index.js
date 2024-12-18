import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';


const blogPosts = [
    {
        title: "Getting Started with HTML",
        date: "January 2024",
        excerpt: "HTML is the foundation of web development. In this post, I walk you through the basics of HTML tags, structure, and how to build simple web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        title: "Mastering CSS for Web Design",
        date: "February 2024",
        excerpt: "CSS plays a crucial role in designing beautiful and responsive websites. This post covers the basics of CSS, including selectors, properties, and layout techniques.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        title: "Understanding SQL Databases",
        date: "April 2024",
        excerpt: "SQL databases are the backbone of many applications. In this post, I explain the basics of SQL, including queries, tables, and relational data.",
        link: "https://www.sqltutorial.org/"
      },
  {
    title: "My Journey with JavaScript",
    date: "December 2023",
    excerpt: "JavaScript has been a fascinating language to learn. From DOM manipulation to asynchronous programming, it's been an exciting journey.",
    link: "https://www.w3schools.com/js/"
  },
  {
    title: "Building a REST API with Node.js",
    date: "March 2024",
    excerpt: "Node.js allows you to create fast and scalable backend services. In this post, I walk through the process of building a REST API using Node.js and Express.",
    link: "https://expressjs.com/"
  },
  {
    title: "Understanding React Lifecycle",
    date: "November 2024",
    excerpt: "React's lifecycle methods provide a powerful way to control component behavior. In this post, I dive deep into the different phases of a React component.",
    link: "https://react.dev/"
  },
  {
    title: "The MERN Stack: A Comprehensive Overview",
    date: "October 2024",
    excerpt: "In this blog post, I explore the MERN stack, its components, and how they work together to build robust full-stack applications.",
    link: "https://www.geeksforgeeks.org/mern-stack/"
  }
];

const Blog = () => {
  return (
    <>
      <Header />
      <section className="blog-section">
        <ul className="blog-list">
          {blogPosts.map((post, index) => (
            <li key={index} className="blog-item">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-link" rel='noopener'>Read More</a>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
