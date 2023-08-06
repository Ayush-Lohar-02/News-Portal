import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('https://dragon-news-server-wine-one.vercel.app/news-categories').then((res) => res.json()).then((data) => setCategories(data)).catch((error) => console.log(error.messsage))


    }, [])

    //console.log(categories);


    return (
        <div>

            <h5 className='text-primary'>Categories-News :{categories.length}</h5>
            <div>
                {
                    categories.map((v, index) => <p key={index}>
                        <Link to={`/category/:${v.id}`}>{v.name}</Link>
                    </p>)
                }
            </div>


        </div>
    );
};

export default LeftSideNav;