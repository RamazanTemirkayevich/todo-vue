export default {
    state: {
        notes: JSON.parse(localStorage.getItem('notes') || '[]')
    },
    mutations: {
        editNote (state, notes) {
            state.notes = notes
        }
    },
    actions: {
        updateNotes ({ commit }, notes) {
            commit('editNote', notes)
            localStorage.setItem('notes', JSON.stringify(notes))
        },
    },
    getters: {
        notes: state => {
            return state.notes
        },
        note: state => id => {
            return state.notes.find(t => t.id === id)
        }
    },
}