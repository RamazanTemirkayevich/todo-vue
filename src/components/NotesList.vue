<template>
    <ul class="notes-list">
        <NotesItem
            v-for="note in notes"
            :key="note.id"
            :note="note"
            @remove-note="rmNote"
            @add-note="addNote"

        />
    </ul>
</template>

<script>
import NotesItem from './NotesItem.vue'

export default {
    props: ['notes'],
    components: {
        NotesItem
    },
    methods: {
        rmNote(id) {
            this.$emit('remove-note', id)
        },
        addNote(note) {
            this.notes.push(note)
        },
    }
}
</script>

<style scoped>
.notes-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 15px;

    padding-left: 0;

    width: 100%;
}
</style>