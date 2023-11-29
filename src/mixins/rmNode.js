export const rmNode = {
    props: {
        note: {
            type: Object,
            required: true
        },
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        rmNode(id) {
            this.notes = this.notes.filter(t => t.id !== id)
            this.todos = this.todos.filter(t => t.id !== id)
        },
    },
}