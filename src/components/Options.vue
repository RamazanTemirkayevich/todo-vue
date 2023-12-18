<template>
    <div class="open-modal__wrapper" @click="openSettings" v-click-outside-element="onClicklOutside">
        <button 
            class="open-modal"
        >
            <span></span>
        </button>

        <div 
            v-if="isOpened"
            ref="settingsPopup"
            class="settings"
        > 
            <ul>
                <li>
                    <div>
                        <img src="@/assets/edit-ico.svg" alt="">
                        <router-link :to="'/todos/' + note.id">
                            Change
                        </router-link>
                    </div>
                </li>
                <li
                    @click="showConfirmation"
                >
                    <div>
                        <img src="@/assets/delete-ico.svg" alt="">
                        <span>Delete</span>
                    </div>
                </li>
            </ul>
        </div>
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
            isOpened: false,
            rm: false
        }
    },
    methods: {
        showConfirmation () {
            const { note } = this

            this.$store.commit('setModalToggled', 'delete_confirmation')
            this.$store.commit('setModalPayload', { note })
        },
        openSettings () {
            this.isOpened = true
        },
        onClicklOutside () {
            this.isOpened = false
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

.open-modal__wrapper {
    margin: 0 5px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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


.settings ul li div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 0;
    padding: 12px;
    cursor: pointer;
}

.settings ul li div span,
.settings ul li div a {
    font-size: 18px;
    font-weight: 500;
    color: var(--black);
}

.settings ul li div::after {
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

    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    background: rgba(109, 109, 109, 0.41);
    z-index: 20;
}

.modal-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 70%;

    padding: 25px;

    background-color: var(--white);
    border-radius: 18px;
    filter: drop-shadow(1.3026548624038696px 14.329203605651855px 65.13274383544922px rgba(0, 0, 0, 0.56));
    z-index: 999;
}

.modal-box p {
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

.modal-box p span {
    position: relative;
    margin-top: 15px;

    font-size: 20px;
    font-weight: 500;

    width: 100%;
    word-wrap: break-word;
}

.modal-buttons {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 17px;

    width: 100%;
}

.modal-buttons button {
    margin: unset;

    padding: 26px 30px;

    width: 100%;
}


@media (min-width: 425px) {
	.modal-box {
		max-width: 368px;
	}
}
</style>