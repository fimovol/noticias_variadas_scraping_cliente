import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Jkanime from './routes/jkanime'
import {ApolloClient,HttpLink, InMemoryCache, ApolloProvider} from '@apollo/client'
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom'

const cliente = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'http://ec2-54-160-172-147.compute-1.amazonaws.com:3120/graphql',
  })
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={cliente}>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/jkanime' element={<Jkanime/>}/>
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
