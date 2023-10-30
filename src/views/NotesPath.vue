<template>
    <div class="notes-todo">
        <router-link to="/">Back to Home Page</router-link>
        <h2> Note </h2>
        <AddTodo 
            :todos="todos"
            @add-todo="addTodo"
            v-bind:todo="todo"
        />
        <div class="line"></div>
        <ul class="notes-todo-list"
            @remove-todo="removeTodo"
        >
            <NotesTodo
                v-for="(todo, i) of todos"
                v-bind:todo="todo"
                v-bind:index="i"
                v-on:remove-todo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
import NotesTodo from '@/components/NotesTodo.vue'
import AddTodo from '@/components/AddTodo.vue'

export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            todos: []
        }
    },
    components: {
        NotesTodo,
        AddTodo
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        },
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(todo) {
            this.todos.push(todo)
        }
    }
}
</script>

<style scoped>
.notes-todo a {
    margin: 25px 0;
}

.notes-todo-list {
    display: flex;
    flex-direction: column;

    gap: 10px;
}
</style>