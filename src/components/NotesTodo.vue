<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox"
                    v-on:change="todo.completed = !todo.completed">
            <strong>{{index + 1}}</strong>
            {{todo.title | uppercase}}
        </span>
        <button class="btn btn--red"
            v-on:click="$emit('remove-todo', todo.id)"
        >
            Delete
        </button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
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

    background-color: #FCFCFD;
    border-radius: 12px;
}

input {
    margin-right: 1rem;
}

.done {
    text-decoration: line-through;
}
</style>