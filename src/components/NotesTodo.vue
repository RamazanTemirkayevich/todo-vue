<template>
    <li            
        v-bind:class="{done: todo.completed}"
    >
        <span>
            <input 
                type="checkbox"
                class="todo-checkbox"
                v-on:change="todo.completed = !todo.completed"
            >
            <div v-if="editedTodoId === todo.id">
                <input 
                    type="text" 
                    v-model="todo.title" 
                    :ref="`todo${todo.id}`" 
                    class="todo-input" 
                
                />
                <button class="btn btn--light" @click.prevent="toggleEdit()">
                    Save
                </button>
            </div>
            <div v-else
                >
                <strong>{{index + 1}}</strong>
                <span 
                    class="todo-title"
                >
                {{ todo.title }}
                </span>
                <button 
                    class="todo-btn" 
                    @click.prevent="toggleEdit(todo.id)"
                >
                    <img src="@/assets/edit-ico.svg" alt="">
                </button>
            </div>
        </span>
        <button 
            class="todo-btn"
            v-on:click="$emit('remove-todo', todo.id)"
        >
            <img src="@/assets/delete-ico.svg" alt="">
        </button>
    </li>
</template>

<script>
export default {
    data() {
        return {
            editedTodoId: null,
        }
    },
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        toggleEdit(id) {
            if (id) {
                this.editedTodoId = id;
                this.$nextTick(() => {
                    if (this.$refs["field" + id]) {
                        this.$refs["field" + id][0].focus();
                    }
                });
            } else {
                this.editedTodoId = null;
                console.log(this.todo.title)
                this.saveTodos();
            }
        },
        saveTodos() {
            this.$emit('save-todos')
        }
    },
    filters: {
        uppercase(value) {
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    background-color: var(--white);
    border-radius: 12px;
}


span, div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 5px;

    margin-left: 7px;

    width: 84%;
    overflow: auto;
}

.todo-checkbox {
    width: 20px;
    height: 20px;

    border-radius: var(--br--10);
}

.todo-input {
    width: 70%;
}

.todo-input[type=text] {
    font-size: 20px;
    font-weight: 500;
}

.todo-title {
    font-size: 20px;
    font-weight: 500;
}

.todo-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    padding: 10px;

    background: none;
    border-radius: var(--br--10);
    border: 1px solid var(--gray-200);
}

.done {
    opacity: 0.6;
}
</style>