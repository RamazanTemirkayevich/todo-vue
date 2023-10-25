<template>
    <li class="notes-item">
        
        <span class="notes-title">
            {{ note.title }}
        </span>
        <div 
            class="notes-remove"
        >
            <rmModal 
                v-bind:note="note"
                @remove-note="rmNote"
            />
        </div>
    </li>
</template>

<script>
import rmModal from './rmModal.vue'

export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    components: {
        rmModal
    },
    methods: {
        rmNote() {
            this.$emit('remove-note', this.note.id)
        }
    }
}
</script>

<style scoped>
.notes-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;

    font-size: 25px;
    font-weight: bold;
}

.notes-remove {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notes-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    text-align: start;
    width: 85%;
}
</style>