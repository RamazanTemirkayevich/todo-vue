<template>
  <div v-if="isToggled" class="modal">
    <div class="modal-box">
      <p>
        Do you want to Delete note?
        <span>"{{ modalPayload.note.title }}"</span>
      </p>
      <div class="modal-buttons">
        <button
          class="modal-close-btn btn btn--regular"
          @click="closeModal"
        >
          Close
        </button>
        <button
          class="modal-rm-btn btn btn--red"
          @click="confirmDelete"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isToggled () {
        return this.$store.getters['modalToggled'] === 'delete_confirmation'
    },
    modalPayload () {
        return this.$store.getters['modalPayload']
    },
    notes() {
      return this.$store.getters.notes;
    },
  },
  methods: {
    async confirmDelete () {
        if (this.modalPayload.modalCallback && typeof(this.modalPayload.modalCallback) === 'function') {
            await this.modalPayload.modalCallback()
        }

        const currentNotesCopy = [ ...this.notes ]
        const currentNoteIndex = this.notes.findIndex(noteIndexToFind => noteIndexToFind.id === this.modalPayload.note.id)
        currentNotesCopy.splice(currentNoteIndex, 1)

        this.$store.dispatch('updateNotes', currentNotesCopy)

        this.closeModal()
    },
    closeModal () {
        this.$store.commit('setModalToggled', null)
        this.$store.commit('setModalPayload', null)
    }
  }
};
</script>

<style>
</style>