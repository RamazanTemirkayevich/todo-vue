<template>
    <a href="/" class="logo">
        <img src="@/assets/Logo.svg" alt="">
    </a>

    <delete-confirmation />
    <router-view />
</template>

<script>
import DeleteConfirmation from "./components/shared/DeleteConfirmation.vue";

export default {
    components: { DeleteConfirmation }
}
</script>

<style>
#app, body {
    padding: 0 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--black);
    margin-top: 15px;
}

#app {
    margin: 0px auto;

    max-width: 345px;

    padding: 20px 20px 100px;

    height: 547px;

    background-color: var(--gray-300);
    border-radius: var(--br--20);
}

body {
    background: linear-gradient(90deg, #89F7FE 0%, #66A6FF 100%);
}

* {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
}

h1 {
    text-transform: uppercase;
}

input {    
    outline: none;
    background: none;
    border: none;
}

input[type="text"] {
    font-size: 20px;
    font-weight: 500;
}

.logo {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
}

.logo img {
    width: 100%;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
select:focus, textarea:focus, input:focus {
        font-size: 16px;
    }
}

:root {
    --black: #1D2939;
    --white: #FFFFFF;

    --primary: #1570EF;
    --primary-600: #D6E7FF;;

    --gray-200: #BFC3CA;
    --gray-300: #F8F8F8;
    --gray-400: #A9A9A9;
    --gray-500: #FCFCFD;
    --gray-600: #A3A6AB;

    --red: #F97066;

    /*  */
    --br--5: 5px;
    --br--7: 7px;
    --br--8: 8px;
    --br--10: 10px;
    --br--10: 13px;
    --br--15: 15px;
    --br--20: 20px;
    --br--25: 25px;
}
</style>
