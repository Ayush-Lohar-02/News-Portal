
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';


const Categoty = () => {

    const categoryNews = useLoaderData();
    // console.log(categoryNews);


    return (
        <div>
            <h3 className='text-primary'>Catagoty-Compnent:{categoryNews.length}</h3>

            {
                categoryNews.map((v, index) => <NewsSummaryCard key={index} news={v}></NewsSummaryCard>)
            }

        </div>
    );
};

export default Categoty;