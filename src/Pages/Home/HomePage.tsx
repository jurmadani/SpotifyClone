import React from "react";
import HomePageHeader from "../../Components/HomePage/HomePageHeader";
import HomePageBody1 from "../../Components/HomePage/HomePageBody1";
import HomePageBody2 from "../../Components/HomePage/HomePageBody2";
import Footer from "../../Components/HomePage/Footer";

export default function HomePage() {
  return (
    <div className="body">
      {/* Header */}
      <HomePageHeader />
      <div className="homepageBody">
        {/* Body 1 */}
        <HomePageBody1/>
        {/* Body 2 */}
        <HomePageBody2/>
        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
}
