import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from 'styled-components';
import Counter from './counter/counter'

const App = () => {
  return (<Container>
  <Element>
  <nav>
    <Router>
      <Link to="/">Home</Link><br/>
      <Link to="/">Blog</Link><br/>
      <Link to="/">About Me</Link><br/>
      <Link to="">Go to Google</Link><br/>
    </Router>
  </nav>

  <Counter/>
  
  
   
 </Element>
  </Container>)
}
const Container = styled.div`
    width: 100%;
    border: 1px solid #d1d8e4;
`
const Element = styled.div`
  width: 400px;  
  margin: 0 auto;
   
`
export default App