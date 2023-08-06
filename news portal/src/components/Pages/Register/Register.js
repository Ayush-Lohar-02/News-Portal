import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTittle from '../../../Hooks/useTittle';


const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    useTittle('Register')

    const { createUser, updateUserProfile, varificationEmail } = useContext(AuthContext);

    const handelSubmit = (event) => {

        const element = event.target;
        const name = element.name.value;
        const photoURL = element.photoURL.value;
        const email = element.email.value;
        const password = element.password.value;
        console.log(name, photoURL);
        console.log(email, password);

        event.preventDefault()


        createUser(email, password).then((result) => {

            const user = result.user;
            console.log(user);
            element.reset();
            setError('');
            handelUpdateUserProfile(name, photoURL);
            emailVarification();
            //https://react-hot-toast.com/docs



        }).catch((error) => {
            console.error(error.message);
            setError(error.message);
        })




    }

    const handelCheckBox = (event) => {

        setAccepted(event.target.checked)


    }

    const handelUpdateUserProfile = (name, photoURL) => {

        console.log(name, photoURL);

        const profile = {
            displayName: name,
            photoURL: photoURL
        }


        updateUserProfile(profile);


    }

    const emailVarification = () => {
        varificationEmail().then(() => { }).catch((error) => console.error(error.message))
    }
    return (
        <div className='w-50 m-auto'>

            <h3>Register-Form</h3>

            <Form onSubmit={handelSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Photo-URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Your Photo-URL" required />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelCheckBox}
                        type="checkbox"
                        label={<>Acccept <Link to='/trams'>Trams And Condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className='text-danger fs-2'> {error}</Form.Text>
            </Form>

        </div>
    );
};

export default Register;