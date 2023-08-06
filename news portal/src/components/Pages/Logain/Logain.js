import React, { useContext, useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTittle from '../../../Hooks/useTittle';

const Logain = () => {

    const { SingIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const location = useLocation();

    const navigate = useNavigate()

    useTittle('Login');


    const form = location.state?.from?.pathname || "/";


    const handelSubmit = (event) => {

        const element = event.target;
        const email = element.email.value;
        const password = element.password.value;
        console.log(email, password)


        event.preventDefault();

        SingIn(email, password).then((result) => {

            const user = result.user;
            console.log(user);
            element.reset();
            setError('');
            navigate(form, { replace: true });
        }).catch(error => {
            console.error(error.message);
            setError(error.message);
        })
    }




    return (
        <div className='w-50 m-auto'>

            <h3>Logain Form</h3>

            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    {/* readOnly defaultValue={} */}
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label={<>Acccept <Link to='/trams'>Trams And Condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
            </Form>

        </div>
    );
};

export default Logain;