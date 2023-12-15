import { createStore } from 'vuex'
import notes from './modules/notes'
import modals from './modules/modals'

export default createStore({
    modules: {
        notes,
        modals
    }
})