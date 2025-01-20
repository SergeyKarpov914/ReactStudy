import React, { useState } from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { TopbarHeight } from "../../assets/global/Theme-variable";

import backLogo  from "../../assets/images/backgrounds/skyline.jpg";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
//  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  marginTop: TopbarHeight,

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
//    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
//    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <MainWrapper>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          paddingBottom: '24px',
          position: 'fixed',
          top: 0,
          height: "fit-content",
          backgroundImage: `url(${backLogo})`, 
          backgroundColor: '#FFF',
          backgroundRepeat: 'repeat-x',
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            marginTop: "20px",
            marginLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
