<template>
    <li class="notes-item">
        <span>
            {{ note.title }}
        </span>
    </li>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.notes-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.notes-item  {
    font-size: 25px;
    font-weight: bold;
}
</style>