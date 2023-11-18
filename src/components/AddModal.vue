<template>
    <div class="modal">
        <div  class="modal-box">
            <p>Add your new Note</p>
            <AddNote
                :notes="notes"
                @close-md="closeModal"
                @add-note="addNote"
                v-bind:note="note"
                @save-note="saveNote"
                :is="title"
            />
        </div>
    </div>
</template>

<script>
import AddNote from './AddNote.vue'

export default {
    props: {
        note: {
            type: Object,
            required: true,
        }
    },
    data() {
        return { 
            notes: []
        }
    },
    components: {
        AddNote,
    },
    methods: {
        closeModal() {
            this.$emit('close-md')
        },
        addNote(note) {
            this.$emit('note-added', note)
        },
        saveNote() {
            this.$emit('save-note')
        }
    }
}
</script>

<style scoped>
.btn--add {
    margin-bottom: 50px;
    padding: 8px 44px;
    height: 53px;
}

.btn--add.bottom {
    position: absolute;
    bottom: 0;
}
</style>