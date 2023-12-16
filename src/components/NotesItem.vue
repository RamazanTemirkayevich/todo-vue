<template>
    <li class="notes-item">
        <div class="notes-item--descr">
            <router-link :to="'/todos/' + note.id" class="notes-title"
                @remove-note="rmNote"
            >
                {{ note.title }}
            </router-link>
            <div 
                class="notes-settings"
            >
                <Options 
                    :note="note"
                />
            </div>
        </div>
        <div class="notes-item--todos">
            <ul>
                <li
					v-for="(todo) of note.todos"
					:key="todo.id"
                >
                    {{ todo.title }} 
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
import Options from '@/components/Options.vue'
import NotesTodo from "@/components/NotesTodo.vue";

export default {
    props: {
        note: {
            type: Object,
            required: true
        },
        todo: {
            type: Object,
            required: true
        }
    },
    components: {
        Options,
        NotesTodo
    },
    computed: {
        todos () {
            return this.$store.getters.todos
        }
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
    flex-direction: column;

    padding: 15px;

    width: 90%;

    border-radius: var(--br--10);
    background-color: var(--white);
    box-shadow: 15px 15px 90px 0px rgba(0, 0, 0, 0.12);
}

.notes-item .notes-item--descr {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
}

.notes-item .notes-item--todos {
    margin-top: 10px;
    width: 95%;
}

.notes-item .notes-item--todos ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;

    gap: 5px;

    width: 94%;

    border-radius: 8px;
}

.notes-item .notes-item--todos ul > :nth-child(n + 3) {
    display: none;
}

.notes-item .notes-item--todos ul li {
    position: relative;

    display: block;
    padding: 8px 8px 8px 23px;

    width: 94%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;

    background-color: var(--gray-100);
    border-radius: var(--br--7);
    font-size: 18px;
    font-weight: 500;
}

.notes-item .notes-item--todos ul li::before {
    position: absolute;

    content: '';

    top: 16px;
    left: 8px;

    width: 7px;
    height: 7px;

    background-color: var(--black);
    border-radius: 50%;
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