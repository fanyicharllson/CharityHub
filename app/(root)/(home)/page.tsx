"use client";

import Banner from "../../homepage_sections/banner";
import SaveLife from "../../homepage_sections/saveLife";
import Card from "../../homepage_sections/card";
import PopularCauses from "../../homepage_sections/popularcauses";
import Voluntier from "../../homepage_sections/Voluntier";
import TestimonialSlider from "../../homepage_sections/testimonial";
import Faqs from "../../homepage_sections/faqs";
import WelcomePopup from "../../homepage_sections/popupmessage";
import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const checkUserSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        return;
      }

      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        setShowPopup(true);
        localStorage.setItem("hasVisited", "true");
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
