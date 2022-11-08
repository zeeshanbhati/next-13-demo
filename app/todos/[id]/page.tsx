import { NOTFOUND } from "dns";
import React from "react";
import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;
type PageProps = {
  params: {
    id: string;
  };
};

const getTodoById = async (todoId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 30 } }
  );
  const todo: Todo = await response.json();
  return todo;
};

const TodoIdPage = async ({ params: { id } }: PageProps) => {
  const todo = await getTodoById(id);

  if (!todo.id) return notFound();

  return (
    <div className="p-5 bg-red-200 text-black">
      <p> {todo.title} </p>
      <p> {todo.id} </p>
      <p> {todo.userId} </p>
    </div>
  );
};

export default TodoIdPage;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await response.json();
  const trimmed = todos.splice(0, 5);
  return trimmed.map((item) => ({
    id: item.id.toString(),
  }));
}
