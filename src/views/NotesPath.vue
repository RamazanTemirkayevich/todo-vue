<template>
    <div class="notes-todo">
        <h2> Note </h2>
        <AddTodo 
            :todos="todos"
            @add-todo="addTodo"
            v-bind:todo="todo"
        />
        <div class="line"></div>
        <div class="notes-todo-container">
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
        <router-link to="/" class="btn btn--light back-btn">
            <img src="@/assets/logout.svg" alt="">
            Back
        </router-link>
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
.notes-todo {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 99%;
}

.notes-todo h2 {
    margin: 20px 0;

    font-size: 28px;
}

.back-btn {
    margin: 15px auto auto;
}

.notes-todo-container {
    position: relative;

    width: 100%;
    height: 340px;
}

.notes-todo-container::after {
    position: absolute;

    content: '';

    left: 0;
    bottom: -1px;

    width: 100%;
    height: 43px;

    background: linear-gradient(180deg, #f8f8f8 -0.32%, rgba(217, 217, 217, 0.00) 100%);
    transform: rotate(-179.948deg);
}


.notes-todo-list {
    display: flex;
    flex-direction: column;

    gap: 10px;

    height: 100%;

    overflow: scroll;
}
</style>