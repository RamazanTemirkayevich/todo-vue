export default {
    state: {
        notes: JSON.parse(localStorage.getItem('notes') || '[]')
    },
    mutations: {
    },
    actions: {
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