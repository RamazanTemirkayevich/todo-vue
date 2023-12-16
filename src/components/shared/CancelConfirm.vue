<template>
    <div class="modal">
        <div class="modal-box">
            <p>
                Cancel changes ?
            </p>
            <div class="modal-buttons">
                <button
                    class="modal-close-btn btn btn--regular"
                    @click="closeModal"
                >
                    No
                </button>
                <button
                    class="modal-rm-btn btn btn--red"
                    @click="cancelChange"
                >
                    Yes
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal () {
            this.$emit('close-md')
        },
        cancelChange () {
            this.$emit('cancel-change')
        }
    }
}
</script>