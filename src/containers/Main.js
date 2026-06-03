import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import StatsStrip from "./statsStrip/StatsStrip";
import ClientLogosMarquee from "./clientLogosMarquee/ClientLogosMarquee";
import Skills from "./skills/Skills";
import TechStackGrid from "./techStackGrid/TechStackGrid";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import ServicesGrid from "./servicesGrid/ServicesGrid";
import ProcessTimeline from "./processTimeline/ProcessTimeline";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import FaqSection from "./faqSection/FaqSection";
import ContactSection from "./contactSection/ContactSection";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  // Dark mode is the default look. Users can still toggle to light;
  // their preference persists via localStorage.
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <StatsStrip />
            <ClientLogosMarquee />
            <Skills />
            <TechStackGrid />
            <WorkExperience />
            <StartupProject />
            <Achievement />
            <ServicesGrid />
            <ProcessTimeline />
            <Education />
            <FaqSection />
            <ContactSection />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
