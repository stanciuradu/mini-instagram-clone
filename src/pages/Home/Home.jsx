import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import "../../pages/Home/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Section />
    </div>
  );
}

export default Home;
