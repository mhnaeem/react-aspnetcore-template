import {TodoItem} from "../models/TodoItem";

const BASE_URL: string = "https://localhost:7177/api";

export async function getTodoItems(): Promise<TodoItem[]> {
    return fetch(`${BASE_URL}/TodoItems`)
        .then(res => res.json());
}

export async function getTodoItem(id: number): Promise<TodoItem> {
    return fetch(`${BASE_URL}/TodoItems/${id}`)
        .then(res => res.json());
}

export async function deleteTodoItem(id: number): Promise<void> {
    await fetch(`${BASE_URL}/TodoItems/${id}`, {
        method: "DELETE"
    });
}

export async function addTodoItem(item: TodoItem): Promise<TodoItem> {
    return fetch(`${BASE_URL}/TodoItems`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    })
        .then(res => res.json());
}

export async function updateTodoItem(id: number, item: TodoItem): Promise<void> {
    await fetch(`${BASE_URL}/TodoItems/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    });
}
