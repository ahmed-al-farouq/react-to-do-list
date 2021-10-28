import React, { useState } from 'react';
import styled from 'styled-components';
import { IoAddCircle } from 'react-icons/io5';

// Styling
const Form = styled.form`
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  border-radius: calc(0.5 * 100px);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
  justify-content: space-evenly;
`;
const InputText = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 85%;
  padding-right: 5px;
  padding-left: 10px;
  border-radius: calc(0.5 * 100px);
  height: 45px;
  outline: none;
  border: none;
  &::placeholder {
    color: #000;
  }
`;
const SubmitButton = styled.button`
  background: transparent;
  color: #5b5b5b;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 600;
  font-size: 22px;
  margin-right: 10px;
  height: 45px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputWarn = styled.input`
  color: red;
  font-size: 20px;
  border: none;
  outline: none;
  margin-left: 30px;
  margin-bottom: 20px;
  width: 100%;
`;

function InputTodo({ addTodoProps }) {
  const [title, setTitle] = useState('');
  const [warnning, setWarnning] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title === '' || title === ' ') {
      setTitle('');
      return setWarnning('Can Not Be Empty, Please Add Something.');
    }
    return addTodoProps(title);
  };

  return (
    <>
      <Form onSubmit={handelSubmit}>
        <InputText type="text" placeholder="Add Todo..." value={title} onChange={handleChange} completed />
        <SubmitButton type="submit">
          <IoAddCircle />
        </SubmitButton>
      </Form>
      <InputWarn type="text" value={warnning} readOnly />
    </>
  );
}

export default InputTodo;
