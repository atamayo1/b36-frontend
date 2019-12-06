import React from 'react';
import Navbar from './Navbar';
import Head from './Head';

function Layout({head, subheading, children, image}){
    return(
        <>
            <Navbar title="Postealo"/>
            <Head title={head} subheading={subheading} image={image}/>
            {children}
        </>
    );
}

export default Layout;
