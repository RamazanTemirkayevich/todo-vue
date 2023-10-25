<template>
    <button 
        @click="open = true"
        class="open-modal"
    >
        <span></span>
    </button>

    <div v-if="open" class="modal">
        <p>Do you want to Delete note</p>
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
        }
    }
}
</script>

<style>
.open-modal {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 1px;
    
    background: none;
    border: none;
    cursor: pointer;
}

.open-modal::after,
.open-modal::before,
.open-modal span {
    position: absolute;

    content: '';

    top: 0;

    width: 4px;
    height: 4px;

    background-color: gray;
    border-radius: 50%;
}

.open-modal::after {
    right: 0;
}

.open-modal::before {
    left: 0;
}

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