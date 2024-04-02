const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'CHECK_TODO':

            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isChecked: !todo.isChecked
                        }
                    }
                    return todo
                })
            }
        case 'EDIT_TODO':
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === state.editID) {
                    return {
                        ...todo,
                        text: action.payload
                    }
                }
                return todo
            })
            return {
                ...state,
                editFlag: !state.editFlag,
                textToEdit: '',
                editID: '',
                todos: updatedTodos
            }

        case 'EDIT_CONFIG':
            return {
                ...state,
                editFlag: !state.editFlag,
                editID: action.payload.id,
                textToEdit: action.payload.text
            }
        case 'CANCEL_EDIT_OPERATION':
            return {
                ...state,
                editFlag: false,
                editID: "",
                textToEdit: "",
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'DELETE_ALL_TODOS':
            return {
                ...state,
                todos: []
            }
        case 'SHOW_ALL_TODOS':
            console.log(state.todos);
            return {
                ...state,
                todos: state.todos
            }
        case 'SHOW_UNDONE_TODOS':
            const jj = state.todos.filter(todo => todo.isChecked === false);
            console.log(jj);
            return {
                ...state,
                todos: jj
            }
        default:
            return state;
    }
}

export default TodoReducer