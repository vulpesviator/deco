import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container, Header, Form, Button } from 'semantic-ui-react';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container className="my-1">
      <Link to="/login">← Go to Login</Link>

      <Header as="h2">Signup</Header>
      <Form onSubmit={handleFormSubmit}>
        <Form.Input
          label="First Name"
          placeholder="First"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
        />
        <Form.Input
          label="Last Name"
          placeholder="Last"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
        <Form.Input
          label="Email"
          placeholder="youremail@test.com"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <Form.Input
          label="Password"
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <Button secondary className='text-dark' type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Signup;
