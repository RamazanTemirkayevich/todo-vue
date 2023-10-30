<template>
    <h1>Your Notes 🗒️</h1>
    <router-view />
</template>

<style>
#app, body {
    padding: 0 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1D2939;
    margin-top: 20px;
}

#app {
    margin: 0px auto;
    max-width: 1000px;

    padding: 20px 20px 250px;

    background-color: #E4E7EC;
    border-radius: 15px;
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

a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 15px;

    background-color: #FCFCFD;
    border-radius: 12px;

    font-size: 20px;
    font-weight: 500;
    color: #0BA5EC;
}
</style>
