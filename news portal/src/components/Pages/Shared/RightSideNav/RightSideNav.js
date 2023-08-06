import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup, Carousel } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaYahoo, FaYoutube } from "react-icons/fa";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import image1 from './../../../../asseat/Image/pic1.jfif'
import image2 from './../../../../asseat/Image/pic2.webp'
import { GoogleAuthProvider } from "firebase/auth";




const RightSideNav = () => {

    const { providerLogain } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();


    const handelGoogleSingIn = () => {

        providerLogain(googleProvider).then((result) => {

            const user = result.user;
            console.log(user);
        }).catch((error) => {
            console.error(error.message);
        })


    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSingIn} variant="outline-danger"><FaGoogle></FaGoogle> Sing-In-With-Google</Button>
                <Button variant="outline-dark mt-3"><FaGithub></FaGithub> Sing-In-With-GitHub</Button>
            </ButtonGroup>

            <div>
                <h5>Find us On</h5>

                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> WhatApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter></FaTwitter> TWitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYahoo></FaYahoo> Yahoo</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-2'>

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>





            </div>
        </div>
    );
};

export default RightSideNav;