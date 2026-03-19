
import React from "react";
import dynamic from "next/dynamic";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import MainBg from "./components/MainBg.jsx";
import Form from "./components/Form";
import Experience from "./components/Experience";

const Skills = dynamic(() => import("./components/Skills"), {
  loading: () => <p>Loading...</p>,
});
const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <p>Loading...</p>,
});
const page = () => {
  return (
    <div className="">
      <Header/>
      <MainBg/>
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Form/>
    </div>
  );
};

export default page;
