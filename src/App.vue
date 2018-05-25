<template>
    <div id="app" align-items-center>
        <header class="bg-light py-3 container-fluid d-flex flex-row justify-content-between align-items-center">
            <h6 class="text-muted m-0">Learned Optimism Test</h6>

            <nav class="list-inline">
                <router-link class="btn btn-link" to="/">Quiz</router-link>
                <router-link class="btn btn-link" to="/results">Results</router-link>
                <router-link class="btn btn-link" to="/about">About</router-link>
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
