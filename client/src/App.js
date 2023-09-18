import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Categories from './pages/Categories';
import QuizPage from './pages/QuizPage';
import ProfilePage from './pages/Profile';
import Art from './pages/Art';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="*" 
              element={<NoMatch />} 
            />
            <Route 
              path="/categories" 
              element={<Categories />} 
            />
            <Route 
              path="/quiz" 
              element={<QuizPage />} 
            />
            <Route
              path="/profile"
              element={<ProfilePage />}
            />
            <Route
              path="/art/:categoryId"
              element={<Art />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUs />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
