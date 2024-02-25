import { React, useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/topbar.jsx";
import { Routes, Route, useLocation } from "react-router";
import Dashboard from "./pages/dashboard/index.jsx";
import SideBar from "./pages/global/Sidebar";
import PointsCalc from "./pages/Pointscalc/index.jsx";
import AuctionFees from "./pages/Auction-fees/index.jsx";
import CitiesCountries from "./pages/Cities-countries/index.jsx";
import Login from "./pages/sign_in/Login.jsx";
import TermsConditions from "./pages/terms-&-Conditions/index.jsx";
import Privacy from "./pages/privacy-policy/index.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const { pathname } = useLocation();
  useEffect(() => {
    // Redirect to the home page only if the pathname is not already '/'
    if (
      window.location.pathname !== "/" &&
      !window.location.pathname.startsWith("/error")
    ) {
      window.location.href = "/";
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <div
              style={{
                display: "flex",
              }}
            >
              {pathname !== "/" && pathname !== "/signUp" && <SideBar />}

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pointsCalc" element={<PointsCalc />} />
                <Route path="/AuctionFees" element={<AuctionFees />} />
                <Route path="/CitiesCountries" element={<CitiesCountries />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
