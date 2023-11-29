<template>
    <div class="notes-todo">
        <div class="notes-todo-title">
            <div v-if="editNote" class="notes-todo-edit">
                <input
                    class="edit-field"
                    type="text"
                    v-model="note.title"
                    @blur="editNote = false"
                    @keyup.enter="editNote = false"
                    v-focus
                >
                <img @click="editNote = false" class="save-ico" src="@/assets/save-ico.svg" alt="">
            </div>
            <div v-else class="notes-todo-edit">
                <div>
                    <h2> {{ note.title }} </h2>
                </div>
                <img @click="editNote = true;" src="@/assets/edit-ico.svg" alt="">
            </div>
        </div>
        <AddTodo 
            :todos="todos"
            @add-todo="addTodo"
            v-bind:todo="todo"
        />
        <div class="line"></div>
        <div class="notes-todo-container">
            <ul class="notes-todo-list"
                @remove-todo="removeTodo"
            >
                <NotesTodo
                    v-for="(todo, i) of todos"
                    v-bind:todo="todo"
                    v-bind:index="i"
                    v-on:remove-todo="removeTodo"
                    @add-todo="addTodo"
                />
            </ul>
        </div>
        <div class="notes-todo-actions">
            <router-link to="/" class="btn btn--light back-btn">
                <img src="@/assets/logout.svg" alt="">
                Back
            </router-link>
            <!-- <button 
                class='btn modal-rm-btn btn--red' 
            >
                Delete
            </button> -->
            <button class="modal-rm-btn btn btn--red"
                @click="opened = true"
            >   
                Delete
            </button>
        </div>

        <Teleport to="body">
            <div v-if="opened" class="modal">
                <div class="modal-box">
                    <p>
                        Do you want to Delete note?
                        <span>"{{ note.title }}"</span>
                    </p>
                    <div class="modal-buttons">
                        <button class="modal-close-btn btn btn--regular"
                            @click="opened = false"
                        >
                            Close
                        </button>
                        <button class="modal-rm-btn btn btn--red"
                            @click="rmNote"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script>
import NotesTodo from '@/components/NotesTodo.vue'
import AddTodo from '@/components/AddTodo.vue'
import { SvgSprite } from 'vue-svg-sprite'

export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            todos: [],
            opened: false,
            editNote: false
        }
    },
    components: {
        NotesTodo,
        AddTodo,
        SvgSprite
    },
    computed: {
        note() {
            return this.$store.getters.note(parseInt(this.$route.params.id))
        }
    },
    mounted() {
        if(localStorage.getItem('todos')) {
            try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
                } catch(e) {
                localStorage.removeItem('todos');
            }
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
            this.saveTodos();
        },
        addTodo(todo) {
            this.todos.push(todo)
            // this.title = ''
            this.saveTodos();
        },
        rmNote() {
            this.$emit('remove-note', this.$route.params.id)
        },
        saveTodos() {
            let parsed = JSON.stringify(this.todos);
            localStorage.setItem('todos', parsed);
        }
    }
}
</script>

<style scoped>
.notes-todo {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 99%;
}

.notes-todo h2 {
    margin: 20px 0;

    text-align: start;

    font-size: 28px;

    width: 252px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.notes-todo-title, .notes-todo-edit {
    display: flex;
    align-content: center;
    justify-content: space-between;

    width: 100%;
}

.notes-todo-edit .edit-field {
    font-size: 26px;
}

.notes-todo-edit .edit-field, .save-ico {
    margin: 20px 0;
}

.notes-todo-edit .save-ico {
    width: 32px;
    height: 32px;
}

.notes-todo-container {
    position: relative;

    width: 100%;
    height: 340px;
}

.notes-todo-container::after {
    position: absolute;

    content: '';

    left: 0;
    bottom: -1px;

    width: 100%;
    height: 43px;

    background: linear-gradient(180deg, #f8f8f8 -0.32%, rgba(217, 217, 217, 0.00) 100%);
    transform: rotate(-179.948deg);
    z-index: 10;
}

.notes-todo-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
}

.notes-todo-actions .btn--red .delete-ico path {
    background-color: var(--red);
}


.notes-todo-list {
    display: flex;
    flex-direction: column;

    gap: 10px;

    height: 100%;

    overflow: scroll;
}
</style>