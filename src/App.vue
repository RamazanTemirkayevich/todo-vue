<template>
    <h1>Your Notes</h1>
    <AddNote
        @add-note="addNote"
    />
    <div class="line"></div>
    <NotesList
        v-bind:notes="notes"
    />
</template>

<script>
import NotesList from './components/NotesList.vue'
import AddNote from './components/AddNote.vue'

export default {
    name: 'app',
    data() {
        return {
            notes: [
                {id: 1, title: 'Note'}
            ]
        }
    },
    components: {
        NotesList,
        AddNote
    },
    methods: {
        addNote(note) {
            this.notes.push(note)
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

* {
    list-style: none;
    text-decoration: none;
}

h1 {
    text-transform: uppercase;
}

.line {
    margin-bottom: 15px;

    width: 100%;
    height: 2px;

    border-radius: 3px;
    background-color: #ddd;
}
</style>
