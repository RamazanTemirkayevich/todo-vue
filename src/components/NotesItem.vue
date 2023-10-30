<template>
    <li class="notes-item">
        <router-link to="/todos" class="notes-title"
            :key="note.id"
            v-bind:note="note"
            v-bind:index="i"
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

.notes-settings {
    position: relative;

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
    width: 77%;
}
</style>