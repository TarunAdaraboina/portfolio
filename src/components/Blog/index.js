import React from 'react';
import { Chrono } from 'react-chrono';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const blogPosts = [
  {
    title: "Getting Started with HTML",
    date: "June 2023",
    excerpt: "HTML is the foundation of web development. In this post, I walk you through the basics of HTML tags, structure, and how to build simple web pages."
  },
  {
    title: "Mastering CSS for Web Design",
    date: "July 2023",
    excerpt: "CSS plays a crucial role in designing beautiful and responsive websites. This post covers the basics of CSS, including selectors, properties, and layout techniques."
  },
  {
    title: "Understanding SQL Databases",
    date: "August 2023",
    excerpt: "SQL databases are the backbone of many applications. In this post, I explain the basics of SQL, including queries, tables, and relational data."
  },
  {
    title: "My Journey with JavaScript",
    date: "September 2023",
    excerpt: "JavaScript has been a fascinating language to learn. From DOM manipulation to asynchronous programming, it's been an exciting journey."
  },
  {
    title: "Building a REST API with Node.js",
    date: "March 2024",
    excerpt: "Node.js allows you to create fast and scalable backend services. In this post, I walk through the process of building a REST API using Node.js and Express."
  },
  {
    title: "Understanding React Lifecycle",
    date: "April 2024",
    excerpt: "React's lifecycle methods provide a powerful way to control component behavior. In this post, I dive deep into the different phases of a React component."
  },
  {
    title: "The MERN Stack: A Comprehensive Overview",
    date: "May 2024",
    excerpt: "In this blog post, I explore the MERN stack, its components, and how they work together to build robust full-stack applications."
  }
];

const Blog = () => {
  const items = blogPosts.map(({ title, date, excerpt }) => ({
    title,
    cardTitle: title,
    cardSubtitle: date,
    cardDetailedText: (
      <div className="blog-details">
        <p className="blog-excerpt">{excerpt}</p>
      </div>
    ),
  }));

  return (
    <>
      <Header />
      <div className="blog-section">
        <div className="blog-timeline-container">
          <Chrono
            items={items}
            mode="VERTICAL"
            scrollable
            theme={{
              primary: "#3b82f6", // Blue primary
              secondary: "#f59e0b", // Yellow secondary
              cardBgColor: "#fff",
              cardForeColor: "#333",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
