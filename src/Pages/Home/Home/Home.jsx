import React from 'react';
import Banner from '../Sections/Banner';
import Footer from '../Sections/Footer';
import Tags from '../Sections/Tag/Tags';
import Announcement from '../Sections/Announcement/Announcement';
import { Helmet } from 'react-helmet-async';
import AllPost from './ShowAllPost/AllPosts';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ConvoConnect | Home</title>
            </Helmet>
            <Banner></Banner>
            <Tags></Tags>
            <Announcement></Announcement>
            <AllPost></AllPost>
            <Footer></Footer>
        </div>
    );
};

export default Home;