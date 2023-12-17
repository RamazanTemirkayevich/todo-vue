<template>
	<div class="notes-todo">
		<div class="notes-todo-title">
			<div v-if="isNoteEditing" class="notes-todo-edit">
				<input
					class="edit-field"
					type="text"
					v-model="note.title"
				/>
				<img
					@click="open = true"
					class="save-ico"
					src="@/assets/cancel-ico.svg"
				/>
				<img
					@click="saveNoteTitle"
					class="save-ico"
					src="@/assets/save-ico.svg"
				/>
			</div>
			<div v-else class="notes-todo-edit">
				<div>
					<h2>{{ note.title }}</h2>
				</div>
				<img @click="isNoteEditing = true" src="@/assets/edit-ico.svg" alt="" />
			</div>
		</div>
		<AddTodo
			:todos="todos"
			@add-todo="addTodo"
			v-bind:todo="todo"
			v-bind:index="i"
		/>
		<div class="line"></div>
		<div class="notes-todo-container">
			<ul class="notes-todo-list" @remove-todo="removeTodo">
				<NotesTodo
					v-for="(todo, i) of todos"
					:key="todo.id"
					v-bind:todo="todo"
					v-bind:index="i"
					v-on:remove-todo="removeTodo"
					@add-todo="addTodo"
					@save-todos="saveTodos"
				/>
			</ul>
		</div>
		<div class="notes-todo-actions">
			<router-link to="/" class="btn btn--light back-btn">
				<img src="@/assets/logout.svg" alt="" />
				Back  
			</router-link>
			<button class="modal-rm-btn btn btn--red" @click="showConfirmation">
				Delete
			</button>
		</div>
	</div>
	<CancelConfirm
        @close-md="closeModal"
		@cancel-change="cancelChange"
        :notes="notes"
        v-if="open"
	/>
</template>

<script>
import NotesTodo from "@/components/NotesTodo.vue";
import AddTodo from "@/components/AddTodo.vue";
import CancelConfirm from "@/components/shared/CancelConfirm.vue"

export default {
	data() {
		return {
			isNoteEditing: false,
			open: false
		};
	},
	components: {
		NotesTodo,
		AddTodo,
		CancelConfirm
	},
	computed: {
		note() {
			return this.$store.getters.note(parseInt(this.$route.params.id));
		},
		notes() {
			return this.$store.getters.notes;
		},
		todos() {
			return this.note.todos
		}
	},
	mounted() {
		if (localStorage.getItem("todos")) {
			try {
				this.todos = JSON.parse(localStorage.getItem("todos"));
			} catch (e) {
				localStorage.removeItem("todos");
			}
		}
	},
	methods: {
		removeTodo(id) {
			this.todos = this.todos.filter(t => t.id !== id)
			this.saveTodos();
		},
		addTodo(todo) {
			const currentNoteCopy = { ...this.note }
			const currentNotesCopy = [ ...this.notes ]

			currentNoteCopy.todos.push(todo)

			const currentNoteIndex = this.notes.findIndex(noteIndexToFind => noteIndexToFind.id === currentNoteCopy.id)
			
			currentNotesCopy.splice(currentNoteIndex, 1, currentNoteCopy)

			this.$store.dispatch('updateNotes', currentNotesCopy)
		},
		showConfirmation () {
			const { note } = this

			const modalCallback = async () => await this.$router.push('/')

			this.$store.commit('setModalToggled', 'delete_confirmation')
			this.$store.commit('setModalPayload', { note, modalCallback })
		},
		saveTodos() {
			let parsed = JSON.stringify(this.todos);
			localStorage.setItem("todos", parsed);
			this.updateNote();
		},
		saveNoteTitle() {
			this.updateNote();
			this.isNoteEditing = false;
		},
		updateNote() {
			const currentNoteCopy = { ...this.note }
			const currentNotesCopy = [ ...this.notes ]
			const currentNoteIndex = this.notes.findIndex(noteIndexToFind => noteIndexToFind.id === currentNoteCopy.id)
			currentNotesCopy.splice(currentNoteIndex, 1, currentNoteCopy)
			this.$store.dispatch('updateNotes', currentNotesCopy)
		},
		closeModal() {
            this.open = false
			// this.isNoteEditing = false;
        },
		cancelChange() {
			this.isNoteEditing = false
			this.open = false

			const currentNoteCopy = { ...this.note }
			const currentNotesCopy = [ ...this.notes ]
			const currentNoteIndex = this.notes.findIndex(noteIndexToFind => noteIndexToFind.id !== currentNoteCopy.id)
			currentNotesCopy.splice(currentNoteIndex, 1, currentNoteCopy)
			this.$store.dispatch('updateNotes', currentNotesCopy)
		},
    },
};
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

.notes-todo-title,
.notes-todo-edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 5px;

    width: 100%;
}

.notes-todo-edit .edit-field {
	width: 100%;
    font-size: 26px;
}

.notes-todo-edit .edit-field,
.save-ico {
    margin: 20px 0;
}

.notes-todo-container {
    position: relative;

    width: 100%;
    height: 340px;
}

.notes-todo-container::after {
    position: absolute;

    content: "";

    left: 0;
    bottom: -1px;

    width: 100%;
    height: 43px;

    background: linear-gradient(
        180deg,
        #f8f8f8 -0.32%,
        rgba(217, 217, 217, 0) 100%
    );
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