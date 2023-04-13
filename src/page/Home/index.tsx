import { ThemeProvider } from "styled-components";
import Header from "../../components/Header";
import GlobalStyle from "../../style/global/global";
import light from "../../style/Theme/light";
import { useState } from "react";
import dark from "../../style/Theme/dark";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

const Home = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <div className="container-form">
        <Form />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
