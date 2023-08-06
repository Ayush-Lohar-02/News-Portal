import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {

    const allNews = useLoaderData();
    return (
        <div>
            <h1>News Data Length :{allNews.length}</h1>
            {
                allNews.map((news, index) => <NewsSummaryCard key={index} news={news}></NewsSummaryCard>)
            }

        </div>
    );
};

export default Home;