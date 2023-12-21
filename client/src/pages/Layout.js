import { Outlet } from "react-router-dom";
import React from "react";
import { LayoutDiv } from "../component/div";
import Menu from "../pages/menu";
import TrendAndFollow from "../pages/TrendsAndFollow";

const Layout = () => {
  return (
    <LayoutDiv>
      <Menu />
      <Outlet />
      <TrendAndFollow />
    </LayoutDiv>
  );
};

export default Layout;
