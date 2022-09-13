import React from "react";
import Header from "./Header";
import NavMenu from "./NavMenu";

type MainPageProps = {
children: React.ReactNode
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <NavMenu />
      {children}
    </div>
  );
};

export default MainPage;