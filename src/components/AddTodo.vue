<template>
    <form @submit.prevent="onSubmitTodo">
        <input type="text" placeholder="Create a Todo" v-model="title">
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
    mounted() {
        if(localStorage.getItem('todos')) {
            try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
                } catch(e) {
                localStorage.removeItem('todos');
            }
        }
    },
    methods: {
        onSubmitTodo() {
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false,
                    edit: false,
                    checked: false
                }

                this.$emit('add-todo', newTodo)
                this.title = ''
                this.saveTodos();
            }
        },
        saveTodos() {
            this.$emit('save-todos')
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

    input[type="text"],
    input::placeholder {
        font-size: 18px;
        font-weight: 500;
    }

    form button {
        margin: unset;
    }
</style>