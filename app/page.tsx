"use client"

import Banner from "./homepage_sections/banner";
import SaveLife from "./homepage_sections/saveLife";
import Card from "./homepage_sections/card";
import PopularCauses from "./homepage_sections/popularcauses";
import Voluntier from "./homepage_sections/Voluntier";
import TestimonialSlider from "./homepage_sections/testimonial";
import Faqs from "./homepage_sections/faqs";
import WelcomePopup from "./homepage_sections/popupmessage";
import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Check the Supabase session to determine if the user is logged in
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      // If the user is logged in (has an active session), do not show the popup
      if (session) {
        return;
      }

      // If the user is not logged in and hasn't visited before, show the popup
      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        setShowPopup(true);
        localStorage.setItem("hasVisited", "true"); // Mark the user as visited
      }
    };

    checkUserSession();
  }, []);

  return (
    <div>
       <WelcomePopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Banner />
      <SaveLife />
      <Card />
      <PopularCauses />
      <Voluntier />
      <TestimonialSlider />
      <Faqs />
    </div>
  );
};

export default Home;
