import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NewsSummaryCard = (props) => {

    //console.log(props.news);

    const { _id, title, author, details, image_url, total_view, rating } = props.news;

    const { name, img, published_date } = author;
    return (
        <div className='mb-3'>
            <Card className="">
                <Card.Header className='d-flex justify-content-between'>



                    <div className='d-flex'>
                        <Image roundedCircle src={img} style={{ height: '60px' }}></Image>
                        <div>
                            <p>{name}</p>
                            <p>{published_date}</p>
                        </div>
                    </div>

                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 200 ? <>{details.slice(0, 200) + '...'} <Link to={`/news/:${_id}`}>Read More ...</Link></> : <>{details}</>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">

                    <div>
                        <FaStar className='text-danger me-3'></FaStar>
                        <span>{rating.number}</span>
                    </div>

                    <div>
                        <FaEye className='me-3'></FaEye>
                        <spam>  {total_view}</spam>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsSummaryCard;