<template>
    <li class="notes-item">
        <router-link :to="'/todos/' + note.id" class="notes-title"
            v-on:remove-note="rmNote"
        >
            {{ note.title }}
        </router-link>
        <div 
            class="notes-settings"
        >
            <Options 
                v-bind:note="note"
                v-on:remove-note="rmNote"
            />
        </div>
    </li>
</template>

<script>
import Options from '@/components/Options.vue'

export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    components: {
        Options
    },
    methods: {
        rmNote(id) {
            this.$emit('remove-note', id)
        },
    }
}
</script>

<style scoped>
.notes-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px;

    width: 90%;

    border-radius: var(--br--10);
    background-color: var(--white);
    box-shadow: 15px 15px 90px 0px rgba(0, 0, 0, 0.12);
}

.notes-settings {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 5px;

    height: 32px;

    border: 1px solid var(--gray-400);
    border-radius: var(--br--7);
}

.notes-title {
    text-align: start;

    width: 77%;

    font-size: 28px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 26px;
    font-weight: 500;
    color: var(--black);
}
</style>