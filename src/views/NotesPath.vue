<template>
    <div class="notes-todo">
        <h2> {{}} </h2>
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
import TodoItem from '@/components/NotesTodo.vue'

export default {
    data() {
        return {
            todos: []
        }
    },
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        }
    }
}
</script>