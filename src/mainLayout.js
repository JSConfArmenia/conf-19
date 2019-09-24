import React from 'react';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const MainLayout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default MainLayout;