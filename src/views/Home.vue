<template>
    <AddModal 
        @note-added="addNote"
        @close-md="closeModal"
        :notes="notes"
        v-if="open"
    />
    <div 
        class="notes"
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
            todos: [],
            open: false,
        }
    },
    components: {
        NotesList,
        AddModal,
    },
    watch: {
        notes: {
            handler: function (newNotes) {
                this.$store.dispatch('updateNotes', newNotes)
            },
            deep: true
        }
    },
    computed: {
        notes () {
            return this.$store.getters.notes
        }
    },
    methods: {
        addNote(note) {
            this.notes.push(note)
        },
        closeModal() {
            this.open = false
        }
    }
}
</script>

<style>
.notes {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.notes.positionBottom {
    padding-top: 190px;
}

.notes::after,
.notes::before {
    position: absolute;

    content: '';

    left: 0;

    width: 100%;
    height: 43px;

    background: linear-gradient(180deg, #f8f8f8 -0.32%, rgba(217, 217, 217, 0.00) 100%);
    z-index: 1;
}

.notes::after {
    bottom: 44px;
    transform: rotate(-180deg);
}

.notes::before {
    top: 0;
    transform: rotate(360deg);
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