<template>
    <ul class="notes-list">
        <NotesItem
            v-for="note in notes"
            v-bind:note="note"
        />
    </ul>
</template>

<script>
import NotesItem from './NotesItem.vue'

export default {
    props: ['notes'],
    components: {
        NotesItem
    }
}
</script>

<style scoped>
.notes-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 15px;

    padding-left: 0;

    width: 100%;
}
</style>