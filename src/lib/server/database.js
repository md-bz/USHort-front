import { nanoid } from "nanoid";

const db = new Map();

export function getTodos(userId) {
    if (!userId) throw new Error("No userId is provided");
    if (!db.get(userId)) {
        db.set(userId, [
            { id: nanoid(15), description: "Learn SvelteKit", done: false },
        ]);
    }
    return db.get(userId);
}

export function createTodo(userId, description) {
    if (!description) throw new Error("A todo needs an description");
    const todos = db.get(userId);

    todos.push({ id: nanoid(15), description, done: false });
}

export function deleteTodo(userId, todoId) {
    const todos = db.get(userId);
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}

export function toggleDone(userId, todoId) {
    const todos = db.get(userId);
    const newTodos = [...todos];

    newTodos.map((todo) => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
    });

    db.set(userId, newTodos);
}
