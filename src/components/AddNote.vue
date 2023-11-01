<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <div class="modal-buttons">
            <button type="submit" class="btn btn--regular"
                @click="
                    $refs.alert.showAlert(
                        'success', // There are 4 types of alert: success, info, warning, error
                        'Your note added to list.', // Message of the alert
                        'Success', // Header of the alert
                        { iconSize: 35, // Size of the icon (px)
                        iconType: 'solid', // Icon styles: now only 2 styles 'solid' and 'regular'
                        position: 'top left' } // Position of the alert 'top right', 'top left', 'bottom left', 'bottom right'
                    )
                "
            >
                Add
            </button>
            <button class="modal-close-btn btn btn--red"
                @click="closeMd"
            >
                Close
            </button>
            <vue-basic-alert 
                :duration="300"
                :closeIn="3000"
                ref="alert" />
        </div>
    </form>
</template>

<script>
import VueBasicAlert from 'vue-basic-alert'

export default {
    props: ['notes'],
    data() {
        return {
            title: '',
            open: false,
        }
    },
    components: {
        VueBasicAlert
    },
    mounted() {
        if (localStorage.title) {
            this.title = localStorage.title;
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newNote = {
                    id: Date.now(),
                    title: this.title,
                }

                this.$emit('add-note', newNote)
                this.title = ''
            }
        },
        closeMd() {
            this.$emit('close-md')
        },
        persist() {
            this.$emit('save-note')
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