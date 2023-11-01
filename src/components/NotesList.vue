<template>
    <ul class="notes-list">
        <keep-alive>
            <NotesItem
                v-for="(note, i) in notes"
                :key="note.id"
                v-bind:note="note"
                v-bind:index="i"
                @remove-note="rmNote"
                @add-note="addNote"
                @save-note="persist"
            />
        </keep-alive>
    </ul>
</template>

<script>
import NotesItem from '@/components/NotesItem.vue'
import { storeToRefs } from "pinia"

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
        persist() {
            localStorage.title = this.title;
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

    width: 100%;
}
</style>