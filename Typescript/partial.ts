interface Todo{
    title: String;
    description: String;
    done: Boolean;
    id: String;
}

type UpdateTodoInput = Partial<Todo>
