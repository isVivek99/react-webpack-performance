import React from "react";
import { text, headingOne, link } from "./home.css";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  console.log(text, headingOne, link);
  return (
    <Layout>
      <p className={headingOne}>
        Hello Worlds of <span className={text}> React</span> and Webpack!
      </p>
      <p>
        <Link to="/dynamic" className={link + " link"}>
          Navigate to Dynamic Page
        </Link>
      </p>
    </Layout>
  );
};

export default Home;
