import {TodoItem} from "../models/TodoItem";

const BASE_URL: string = "https://localhost:7177/api";

let items = [
    {
        id: 1,
        name: "eat",
        isComplete: false
    },
    {
        id: 2,
        name: "sleep",
        isComplete: false
    },
];

export async function getTodoItems(): Promise<TodoItem[]> {
    return items;
}

export async function getTodoItem(id: number): Promise<TodoItem> {
    // @ts-ignore
    return items
        .find(item => item.id === id);
}

export async function deleteTodoItem(id: number): Promise<void> {
    items = items
        .filter(item => item.id !== id)
}

export async function addTodoItem(item: TodoItem): Promise<TodoItem> {
    items.push(item);
    return item;
}

export async function updateTodoItem(id: number, item: TodoItem): Promise<void> {
    items = items
        .map(i => {
            if(i.id === id) {
                return item;
            }
            return i;
        });
}
