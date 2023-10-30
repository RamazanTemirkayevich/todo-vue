<template>
    <form @submit.prevent="onSubmitTodo">
        <input type="text" v-model="title">
        <button type="submit" class="btn btn--regular">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmitTodo() {
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }

                this.$emit('add-todo', newTodo)
                this.title = ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        align-items: center;

        gap: 8px;
    
        margin-bottom: 15px;
    }

    input {
        padding-left: 10px;
        width: 100%;
        height: 40px;

        border: 2px solid #E4E7EC;
        border-radius: 8px;
    }

    input[type="text"] {
        font-size: 18px;
    }

    form button {
        margin: unset;
    }
</style>