<template>
    <div id="app">
        <header class="bg-light py-3 container-fluid">
            <h1 class="text-muted">Learned Optimism Test</h1>
        </header>

        <div class="py-3 container-fluid">
            <p>There are forty-eight (48) questions in this evaluation test. Take as much time as you need to answer
                each of the questions. On average, this test takes about fifteen minutes. There are no right or wrong answers.
                Do NOT read the analysis in "Learned Optimism" until after you have completed this test.</p>

            <p>Read the description of each situation and vividly imagine it happening to you. You have probably not
                experienced some of the situations, but that should not matter. Perhaps neither response will fit; but
                go ahead and choose the cause likelier to apply to you.</p>

            <p>You may not like the way some of the responses sound, but don't choose what you think you should say or
                what would sound right right to other people; choose the response you'd be likelier to have.</p>

            <header class="py-3">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Quiz</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/results">Results</router-link>
                    </li>
                </ul>
            </header>
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
