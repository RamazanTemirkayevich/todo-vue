<template>
    <button 
        class="open-modal"
        @click="open = !open"
    >
        <span></span>
    </button>

    <div 
        class="settings"
        v-if="open" 
        v-show="open"
    > 
        <ul>
            <li>
                <router-link to="/todos">
                    Change
                </router-link>
            </li>
            <li
                @click="opened = true"
            >
                Delete
            </li>
        </ul>

        <Teleport to="body">
            <div v-if="opened" class="modal">
                <p>
                    Do you want to Delete note?
                    <span>"{{ note.title }}"</span>
                </p>
                <div class="modal-buttons">
                    <button class="modal-close-btn btn btn--regular"
                        @click="opened = false"
                    >
                        Close
                    </button>
                    <button class="modal-rm-btn btn btn--red"
                        v-on:click="$emit('remove-note', note.id)"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Teleport>
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
            opened: false,
            rm: false
        }
    },
    methods: {
        rmNote() {
            this.$emit('remove-note', this.note.id)
        },
        openMd() {
            //this.open = !this.open
            this.open = true
            this.$emit('open-md')
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
    height: 4px;
    
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

.settings {
    position: absolute;

    top: 80%;
    right: 0;
    
    background-color: #fff;
    box-shadow: 0px 0px 16px 0px #d3d3d3;
    border-radius: 12px;
    z-index: 10;
}

.settings ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: unset;

    gap: 10px;
}

.settings ul li {
    position: relative;
    
    margin-left: 0;
    
    padding: 12px;

    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
}

.settings ul li::after {
    position: absolute;

    content: '';

    bottom: -5px;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: #d3d3d3;
}

.settings ul li:hover {
    color: #0BA5EC;
}
.settings ul li:last-child::after {
    display: none;
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

.modal p {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    font-weight: 900;
    margin-bottom: 15px;
    color: var(--black);
}

.modal p span {
    position: relative;
    margin-top: 15px;

    font-size: 18px;
    font-weight: 400;

    width: 100%;
    word-wrap: break-word;
}

.modal p span::after {
    position: absolute;

    content: '';

    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 70%;
    height: 2px;

    background-color: #d3d3d3;
    border-radius: 10px;
}

.modal-buttons {
    display: flex;
    align-items: center;

    gap: 17px;
}

.modal-buttons button {
    margin: unset;

    padding: 26px 42px;
}
</style>