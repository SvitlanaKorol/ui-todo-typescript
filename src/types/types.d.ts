export type Todo = {
  userId: number,
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoResponse {
  userId: number,
  id: number;
  title: string;
  completed: boolean;
}


interface ExtendedTodoResponse extends TodoResponse {
  description?: string;
  createdAt?: string;
}