import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Container, Button, Header, Message } from 'semantic-ui-react';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Link to="/signup">← Go to Signup</Link>

      <Header as="h2">Login</Header>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>
        {error && (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p>The provided credentials are incorrect</p>
          </Message>
        )}
        <Button secondary className='text-dark' type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Login;