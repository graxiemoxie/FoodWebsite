import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Welcome from "../../components/WelcomeSection/Welcome";
import AboutUs from "../../pages/AboutUs/AboutUs";
import MenuSection from "../../components/MenuSection/MenuSection";
import BookATable from "../../components/BookATableSection/BookATable";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/FooterSection/Footer";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <div>
        <section className="main">
          <Welcome />
          <AboutUs />
          <MenuSection />
          <BookATable />
          <ContactUs />
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Home;
