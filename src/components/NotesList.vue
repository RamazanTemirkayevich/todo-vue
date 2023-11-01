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
                @save-note="saveNote"
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
    mounted() {
        if(localStorage.getItem('notes')) {
            try {
                this.notes = JSON.parse(localStorage.getItem('notes'));
            } catch(e) {
                localStorage.removeItem('notes');
            }
        }
    },
    methods: {
        rmNote(id) {
            this.$emit('remove-note', id)
        },
        addNote(note) {
            this.notes.push(note)
            this.saveNote()
        },
        saveNote() {
            let parsed = JSON.stringify(this.notes);
            localStorage.setItem('notes', parsed);
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