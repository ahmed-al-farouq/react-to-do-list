import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const Item = styled.li`
  font-size: 1.2rem;
  list-style-type: none;
  padding: 17px 0px;
  border-bottom: 1px solid #eaeaea;
  width: 80%;
  margin: 1px auto;
`;
const Button = styled.button`
  font-size: 13px;
  background: #f1f3f4;
  color: #cf0000;
  border: none;
  cursor: pointer;
  float: right;
  outline: none;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  margin: -10px 0 0 10px;
  transition: 0.5s;
  &:hover {
    background: #c9c9c9;
  }
`;
const EditInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dfdfdf;
`;

function TodoItem({
  id, task, completed, handleChangeProp, deleteItemsProp, setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <Item>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input type="checkbox" checked={completed} onChange={() => handleChangeProp(id)} style={{ marginRight: '15px' }} />
        <Button type="button" onClick={() => deleteItemsProp(id)}>
          <FaTrash />
        </Button>
        <span
          style={completed ? completedStyle : null}
        >
          {task}
        </span>
      </div>
      <EditInput
        type="text"
        style={editMode}
        value={task}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </Item>
  );
}

export default TodoItem;
