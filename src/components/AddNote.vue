<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Add Note</button>
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
        onSubmit() {
            if (this.title.trim()) {
                const newNote = {
                    title: this.title,
                }

                this.$emit('add-note', newNote)
                this.title = ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input {
        width: 80%;
    }
</style>