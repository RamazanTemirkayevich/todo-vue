<template>
    <div class="notes-todo">
        <h2>Note{{ note.title }}</h2>
        <!-- <div class="notes-todo-title">
            <input
                v-if="note.edit"
                v-model="note.title"
                @blur="note.edit = false; $emit('update')"
                @keyup.enter="note.edit=false; $emit('update')"
                v-focus
            >
            <div v-else>
                <label @click="note.edit = true;"> Name of Note </label>
            </div>
        </div> -->
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
                />
            </ul>
        </div>
        <div class="notes-todo-actions">
            <router-link to="/" class="btn btn--light back-btn">
                <img src="@/assets/logout.svg" alt="">
                Back
            </router-link>
            <button 
                class='btn modal-rm-btn btn--red' 
            >
                Delete
            </button>
            <!-- <button class="modal-rm-btn btn btn--red"
                @remove-note="rmNote"
            >   
                Delete
            </button> -->
        </div>
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
            notes: []
        }
    },
    components: {
        NotesTodo,
        AddTodo,
        SvgSprite
    },
    computed: {
        note() {
            return this.$store.getters.noteById(+this.$route.params.id)
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
        rmNote(id) {
            this.$emit('remove-note', id)
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

    font-size: 28px;
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