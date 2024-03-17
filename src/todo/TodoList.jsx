import React from 'react';
import {Each} from '../common/Each';
import TodoCard from './TodoCard';
const TodoList = ({todo = [], filter}) => {
  return (
    <Each
      of={todo}
      render={(item, index) => (
        <TodoCard item={item} index={index} filter={filter} />
      )}
    />
  );
};
export default TodoList;
