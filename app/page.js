import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import MainBg from "./components/MainBg.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Experience from "./components/Experience";

const page = () => {
  return (
    <div>
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
