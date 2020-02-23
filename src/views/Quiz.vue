<template>
    <div class="container-fluid">
        <ul class="list-unstyled mb-5">
            <li v-for="question in questions" :key="`question-${question.id}`" class="border-bottom mt-3 pb-1 pt-2">
                <h5>{{ question.question }}</h5>
                <!--<small class="text-muted">{{ question.subScale }}</small>-->
                <div v-for="answer in question.answers" :key="answer.answer">
                    <label class="answer py-2 my-1 d-block"
                       :class="answer.chosen ? 'active' : ''"
                       @click.prevent="answerQuestion(question.id, question.subScale, answer.weight)"
                       href="#">
                        <input type="checkbox" class="mr-2" :checked="answer.chosen">
                        <i>{{ answer.answer }}</i>
                    </label>
                </div>
            </li>
        </ul>


        <div class="fixed-bottom py-3 border-top bg-white">
            <div class="container-fluid">
                <div v-if="completion != 100" class="progress">
                    <div class="progress-bar"
                         :class="{ 'bg-success': completion === 100 }"
                         role="progressbar"
                         :aria-valuenow="completion"
                         :style="{width: `${completion}%`}"
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>

                <router-link v-if="completion == 100" tag="button" class="btn btn-primary btn-block" to="/results">
                    View Your Results
                </router-link>
            </div>
        </div>
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
    .active:hover {
        color: rgb(16, 151, 184);
    }
</style>

<script>
  export default {
    name: 'quiz',
    computed: {
      questions() {
        return this.$store.state.questions;
      },
      completion() {
        return this.$store.state.questions.filter(question => {
          return question.answers.filter(answer => {
            return answer.chosen === true;
          }).length;
        }).length / this.$store.state.questions.length * 100;
      },
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
