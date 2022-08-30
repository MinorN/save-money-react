import React from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  color:red;
  border: none;
  background-color: green;
  &:hover{
    background-color: pink;
  }
`;

function App() {
  return (
    <div>
      <Button>你好</Button>
    </div>
  );
}

export default App;
