<template>
    <h1>Your Notes 🗒️</h1>
    <AddModal 
        @note-added="addNote"
    />
    <div class="line"></div>
    <NotesList
        v-if="notes.length"
        v-bind:notes="notes"
        @remove-note="rmNote"
    />
    <p v-else>Create a new Note ✍️</p>
</template>

<script>
import NotesList from '@/components/NotesList'
import AddModal from '@/components/AddModal'

export default {
    name: 'app',
    data() {
        return { 
            notes: [],
            todos: []
        }
    },
    components: {
        NotesList,
        AddModal,
        // AddNote
    },
    methods: {
        rmNote(id) {
            this.notes = this.notes.filter(t => t.id !== id)
        },
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addNote(note) {
            this.notes.push(note)
        }
    }
}
</script>

<style>
#app, body {
    padding: 0 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1D2939;
    margin-top: 20px;
}

#app {
    margin: 0px auto;
    max-width: 1000px;

    padding: 20px 20px 250px;

    background-color: #E4E7EC;
    border-radius: 15px;
}

* {
    list-style: none;
    text-decoration: none;
}

h1 {
    text-transform: uppercase;
}

button {
    margin: 30px auto 20px auto;
}

.line {
    margin-bottom: 15px;

    width: 100%;
    height: 2px;

    border-radius: 3px;
    background-color: #FCFCFD;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 22px;

    height: 47px;

    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;

    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.btn.btn--red {
    color: #FCFCFD;
    background-color: #F97066;
}

.btn.btn--regular {
    color: #0BA5EC;
    background-color: #F2F4F7;
}

p {
    font-size: 20px;
    font-weight: 500;
}
</style>
