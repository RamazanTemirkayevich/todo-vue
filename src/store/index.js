import { createStore } from 'vuex'

export default createStore({
    state: {
        notes: JSON.parse(localStorage.getItem('notes') || '[]')
    },
    mutations: {
        createNote(state, note) {
            state.notes.push(note)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        }
    },
    actions: {
        createNote({commit}, note) {
            commit('createNote', note)
        }
    },
    getters: {
        notes: s => s.notes,
        noteById: s => id => s.notes.find(t => t.id === id)
    },
    modules: {
    }
})