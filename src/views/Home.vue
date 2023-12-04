<template>
    <AddModal 
        @note-added="addNote"
        @close-md="closeModal"
        :notes="notes"
        v-if="open"
    />
    <div class="notes"
        v-bind:class="classObject"
    >
        <NotesList
            v-if="notes.length"
            v-bind:notes="notes"
            @remove-note="rmNote"
            v-on:change="notes = !notes"
        />
        <button 
            class="btn btn--regular btn--add"
            @click="open = true"
            :note="note"
        >
            + Add Note
        </button>
        <p v-if="!notes.length">
            create a new note
        </p>
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
            todos: [],
            open: false,
            // classObject: {
            //     active: true,
            //     'text-danger': false
            // }
        }
    },
    components: {
        NotesList,
        AddModal
    },
    mounted () {
        this.getLocalStorage()
    },
    watch: {
        notes: {
            handler: function (newNotes) {
                this.setLocalStorage(newNotes)
            },
            deep: true
        }
    },
    methods: {
        rmNote(id) {
            this.notes = this.notes.filter(t => t.id !== id)
            this.$router.push('/')
        },
        addNote(note) {
            this.notes.push(note)
        },
        closeModal() {
            this.open = false
        },
        setLocalStorage (newNotes) {
            localStorage.setItem('notes', JSON.stringify(newNotes))
        },
        getLocalStorage () {
            const notes = JSON.parse(localStorage.getItem('notes'))
        
            if (notes) {
                this.notes = notes
            }
        }
    }
}
</script>

<style>
.notes {
    margin-top: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.notes.positionBottom {
    padding-top: 190px;
}

.notes::after {
    position: absolute;

    content: '';

    left: 0;
    bottom: 44px;

    width: 100%;
    height: 43px;

    background: linear-gradient(180deg, #f8f8f8 -0.32%, rgba(217, 217, 217, 0.00) 100%);
    transform: rotate(-179.948deg);
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
    text-transform: uppercase;

    border: none;
    border-radius: var(--br--8);
    cursor: pointer;
    z-index: 10;
}

.btn.btn--red {
    color: var(--red);
    background-color: unset;
}

.btn.btn--regular {
    color: var(--white);
    background-color: var(--primary);
}

.btn.btn.btn--light {
    color: var(--primary);
    background-color: var(--primary-600);
}

p {
    margin-top: 24px;

    font-size: 20px;
    font-weight: 700;

    color: var(--gray-600);
}
</style>