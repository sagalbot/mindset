<template>
    <div class="container-fluid">
        <ul class="list-unstyled">
            <li v-for="question in questions" :key="`question-${question.id}`" class="border-bottom mt-3 pb-3">
                <h5>{{ question.question }}</h5>
                <!--<small class="text-muted">{{ question.subScale }}</small>-->
                <div v-for="answer in question.answers" :key="answer.answer">
                    <a class="answer my-4 d-block"
                       :class="answer.chosen ? 'active' : ''"
                       @click.prevent="answerQuestion(question.id, question.subScale, answer.weight)"
                       href="#">
                        <i>{{ answer.answer }}</i>
                    </a>
                </div>
            </li>
        </ul>

        <router-link tag="button" class="btn btn-primary btn-block" to="/results">View Your Results</router-link>
    </div>
</template>

<style scoped>
    a {
        color: #2c3e50;
    }

    .answer,
    .answer:active,
    .answer:hover {
        text-decoration: none;
        transition: color .025s;
        color: rgb(108, 117, 125);
    }

    .active,
    .active:active,
    .active:hover{
        color: rgb(16, 151, 184);
    }
</style>

<script>
  export default {
    name: 'quiz',
    computed: {
      questions() {
        return this.$store.state.questions;
      }
    },
    methods: {
      answerQuestion(id, subScale, weight) {
        this.$store.commit('answer', {id, subScale, weight});
        this.$store.commit('markChosen', {id, weight})
      },
      getClass(id, subScale, weight) {
        return this.$store.state.results[subScale][`${subScale}-${id}`] === weight ? 'active' : '';
      }
    }
  }
</script>
