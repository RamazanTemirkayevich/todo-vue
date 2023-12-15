export default {
    state: {
        /**
         * @type {string} - delete_confirmation
         */
        modalToggled: null,
        modalPayload: null
    },
    mutations: {
        setModalToggled (state, modalName) {
            if (!modalName) {
                state.modalToggled = null
                return
            }

            state.modalToggled = modalName
        },
        setModalPayload (state, payload) {
            if (!payload) {
                state.modalPayload = null
                return
            }

            state.modalPayload = payload
        }
    },
    getters: {
        modalToggled: state => state.modalToggled,
        modalPayload: state => state.modalPayload
    },
}