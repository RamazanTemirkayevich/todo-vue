<template>
    <div class="notes">
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
        <router-view />
    </div>
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
        addNote(note) {
            this.notes.push(note)
        }
    }
}
</script>

<style>
.notes {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.line {
    margin: 15px 0;

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