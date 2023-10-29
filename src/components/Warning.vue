<template>
    <div v-if="open" class="modal">
        <p>Do you want to Delete note ?</p>
        <div class="modal-buttons">
            <button class="modal-close-btn btn btn--regular"
                @click="open = false"
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
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            open: false,
            rm: false
        }
    },
    methods: {
        rmNote () {
            this.$emit('remove-note', this.note.id)
            this.open = false
        },
        openMd() {
            this.$emit('open-md')
        }
    }
}
</script>

<style>
.modal {
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    z-index: 999;
    top: 20%;
    left: 50%;
    width: 290px;
    margin-left: -170px;

    padding: 25px;

    background-color: #fff;
    border-radius: 18px;
    filter: drop-shadow(1.3026548624038696px 14.329203605651855px 65.13274383544922px rgba(0, 0, 0, 0.56));
}

.modal-buttons {
    display: flex;
    align-items: center;

    gap: 17px;
}
</style>