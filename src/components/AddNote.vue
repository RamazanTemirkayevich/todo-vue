<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <div class="modal-buttons">
            <button type="submit" class="btn btn--regular">Add</button>
            <button class="modal-close-btn btn btn--red"
                @click="closeMd"
            >
                Close
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: ['notes'],
    data() {
        return {
            title: '',
            open: false,
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newNote = {
                    // id: this.notes.length,
                    title: this.title,
                }

                this.$emit('add-note', newNote)
                this.title = ''
            }
        },
        closeMd() {
            this.$emit('close-md')
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
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

        margin-bottom: 15px;
    }

    input[type="text"] {
        font-size: 18px;
    }

    .modal-buttons {
        flex-direction: row-reverse;
    }

    .modal-buttons button {
        margin: unset;
    }
</style>