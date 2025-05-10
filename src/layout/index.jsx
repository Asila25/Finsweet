import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { LayoutWrapper, Main } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <div>
        <Header />
        <Main>{children}</Main>
      </div>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout