<template>
    <button 
        @click="open = true"
        class="btn btn--regular"
    >
        + Add Note
    </button>

    <div v-if="open" class="modal">
        <p>Add your new Note</p>
        <KeepAlive>
            <AddNote
                :notes="notes"
                @close-md="closeModal"
                @add-note="addNote"
                v-bind:note="note"
                @save-note="persist"
                :is="title"
            />
        </KeepAlive>
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
            notes: [],
            open: false,
        }
    },
    components: {
        AddNote,
    },
    methods: {
        closeModal() {
            this.open = false
        },
        addNote(note) {
            this.$emit('note-added', note)
        },
        persist() {
            this.$emit('save-note')
        }
    }
}
</script>