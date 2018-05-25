<template>
    <div id="app">
        <header class="bg-light py-3 container-fluid d-flex flex-row justify-content-between align-items-center">
            <h6 class="text-muted m-0">Learned Optimism</h6>

            <nav class="list-inline">
                <router-link class="px-2" to="/">Quiz</router-link>
                <router-link class="px-2" to="/results">Results</router-link>
                <router-link class="px-2" to="/about">About</router-link>
            </nav>
        </header>

        <div class="py-3">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';

    #app {
        font-family: 'TT Norms', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
