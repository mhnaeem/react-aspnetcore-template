import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { deleteTodoItem, getTodoItems, updateTodoItem } from "../controller/TodoItemsController";

export default function TodoItemsScreen() {
    const [todoItems, setTodoItems] = useState([]);

    const fetchData = async () => {
        const items = await getTodoItems()
        setTodoItems(items);
    }

    useEffect(() => {
        const fetchData = async () => {
            const items = await getTodoItems()
            setTodoItems(items);
        }
        fetchData()
    }, []);

    useEffect(() => {
        // items updated
    }, [todoItems]);

    return <TodoList
        todoItems={todoItems}
        updateItem={updateTodoItem}
        deleteItem={deleteTodoItem}
        onChangeCallback={fetchData}
    />
}

function TodoList({ todoItems, updateItem, deleteItem, onChangeCallback }) {
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todoItems.map((item) => {
                const labelId = `checkbox-list-secondary-label-${item.id}`;
                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={async () => {
                                    await updateItem(item.id, {
                                        ...item,
                                        isComplete: !item.isComplete
                                    });
                                    await onChangeCallback();
                                }}
                                checked={item.isComplete}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={`${item.name}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}