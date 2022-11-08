import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await response.json();
  console.log(todos);
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodos();

  if (!todos) {
    return (
      <div>
        <p>Oops Something Went Wrong!</p>
      </div>
    );
  }

  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id} className="py-2  border-2 border-blue-300">
            <Link href={`/todos/${item.id}`}> {item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;


