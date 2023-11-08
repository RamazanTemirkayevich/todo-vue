<template>
    <ul class="notes-list">
        <NotesItem
            v-for="(note, i) in notes"
            :key="note.id"
            v-bind:note="note"
            v-bind:index="i"
            @remove-note="rmNote"
            @add-note="addNote"
            @save-note="saveNote"
        />
    </ul>
</template>

<script>
import NotesItem from '@/components/NotesItem.vue'

export default {
    props: ['notes'],
    components: {
        NotesItem
    },
    methods: {
        rmNote(id) {
            this.$emit('remove-note', id)
            this.saveNote()
        },
        addNote(note) {
            this.notes.push(note)
            this.saveNote()
        },
        saveNote() {
            let parsed = JSON.stringify(this.notes)
            localStorage.setItem('notes', parsed)
        }
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
    padding-bottom: 20px;

    width: 100%;
    height: 420px;

    overflow: scroll;
}
</style>