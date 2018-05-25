import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        id: 1,
        subScale: "PsG",
        question: "The project you are in charge of is a great success.",
        answers: [
          {
            answer: "I kept a close watch over everyone's work.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "Everyone devoted a lot of time and energy to it.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 2,
        subScale: "PmG",
        question: "You and your partner make up after a fight.",
        answers: [
          {
            answer: "I forgave him/her.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I'm usually forgiving.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 3,
        subScale: "PsB",
        question: "You get lost driving to a friend's house.",
        answers: [
          {
            answer: "I missed my turn.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "My friend gave me bad directions.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 4,
        subScale: "PsG",
        question: "Your spouse (boyfriend/girlfriend) suprises you with a gift.",
        answers: [
          {
            answer: "He/she just got a raise at work.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I took him/her out to a special dinner the night before.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 5,
        subScale: "PmB",
        question: "You forget your spouse's (boyfriend's/girlfriend's) birthday.",
        answers: [
          {
            answer: "I'm not good at remembering birthdays.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I was preoccupied with other things.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 6,
        subScale: "PvG",
        question: "You get a flower from a secret admirer.",
        answers: [
          {
            answer: "I am attractive to him/her.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I am a popular person.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 7,
        subScale: "PvG",
        question: "You run for a community office position and win.",
        answers: [
          {
            answer: "I devote a lot of time and energy to campaigning.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I work very hard at everything I do.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 8,
        subScale: "PvB",
        question: "You miss an important engagement.",
        answers: [
          {
            answer: "Sometimes my memory fails me.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I sometime forget to check my appointment book.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 9,
        subScale: "PsB",
        question: "You run for a community office position and you lose.",
        answers: [
          {
            answer: "I didn't campaign hard enough.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "The person who won knew more people.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 10,
        subScale: "PmG",
        question: "You host a successful dinner.",
        answers: [
          {
            answer: "I was particularly charming that night.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I am a good host.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 11,
        subScale: "PsG",
        question: "You stop a crime by calling the police.",
        answers: [
          {
            answer: "A strange noise caught my attention.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I was alert that day.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 12,
        subScale: "PsG",
        question: "You were extremely healthy all year.",
        answers: [
          {
            answer: "Few people around me were sick, so I wasn't exposed.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I made sure I ate well and got enough rest.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 13,
        subScale: "PmB",
        question: "You owe the library ten dollars for an overdue book.",
        answers: [
          {
            answer: "When I am really involved in what i am reading, I often forget when it is due.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I was so involved in writing the report that I forgot to return the book.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 14,
        subScale: "PmG",
        question: "Your stocks make you a lot of money.",
        answers: [
          {
            answer: "My broker decided to take on something new.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "My broker is a top-notch investor.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 15,
        subScale: "PmG",
        question: "You win an athletic contest.",
        answers: [
          {
            answer: "I was feeling unbeatable.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I train hard.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 16,
        subScale: "PvB",
        question: "You fail an important examination.",
        answers: [
          {
            answer: "I wasn't as smart as the other people taking the exam.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I didn't prepare for it well.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 17,
        subScale: "PvB",
        question: "You prepared a special meal for a friend and he/she barely touched the food.",
        answers: [
          {
            answer: "I wasn't a good cook.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I made the meal in a rush.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 18,
        subScale: "PvB",
        question: "You lose a sporting event for which you have been training for a long time.",
        answers: [
          {
            answer: "I'm not very athletic.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I'm not good at that sport.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 19,
        subScale: "PsB",
        question: "Your car runs out of gas on a dark street late at night.",
        answers: [
          {
            answer: "I didn't check to see how much gas was in the tank.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "The gas gauge was broken.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 20,
        subScale: "PmB",
        question: "You lose your temper with a friend.",
        answers: [
          {
            answer: "He/she is always nagging me.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "He/she was in a hostile mood.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 21,
        subScale: "PmB",
        question: "You are penalized for not returning your income-tax form on time.",
        answers: [
          {
            answer: "I always put off doing my taxes.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I was lazy about getting my taxes done year.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 22,
        subScale: "PvB",
        question: "You ask a person out on a date and he/she say no.",
        answers: [
          {
            answer: "I was a wreck that day.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I got tongue-tied when I asked him/her on the date.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 23,
        subScale: "PsG",
        question: "A game-show host picks you out of the audience to participate in the show.",
        answers: [
          {
            answer: "I was sitting in the right seat.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I looked the most enthusiastic.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 24,
        subScale: "PmG",
        question: "You are frequently asked to dance at a party.",
        answers: [
          {
            answer: "I am outgoing at parties.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I was in perfect form that night.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 25,
        subScale: "PsB",
        question: "You buy your spouse (boyfriend/girlfriend) a gift and he/she doesn't like it.",
        answers: [
          {
            answer: "I don't put enough thought into things like that.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "He/she has very picky tastes.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 26,
        subScale: "PmG",
        question: "You do exceptionally well in a job interview.",
        answers: [
          {
            answer: "I felt extremely confident during the interview.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I interview well.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 27,
        subScale: "PsG",
        question: "You tell a joke and everyone laughs.",
        answers: [
          {
            answer: "The joke was funny.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "My timing was perfect.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 28,
        subScale: "PvG",
        question: "Your boss gives you too little time in which to finish a project, but you get it finished anyway.",
        answers: [
          {
            answer: "I am good at my job.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I am an efficient person.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 29,
        subScale: "PmB",
        question: "You've been feeling run-down lately.",
        answers: [
          {
            answer: "I never get a chance to relax.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I was exceptionally busy this week.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 30,
        subScale: "PsB",
        question: "You ask someone to dance and he/she says no.",
        answers: [
          {
            answer: "I am not a good enough dancer.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "He/she doesn't like to dance.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 31,
        subScale: "PvG",
        question: "You save a person from choking to death.",
        answers: [
          {
            answer: "I know a technique to stop someone from choking.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I know what to do in crisis situations.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 32,
        subScale: "PvB",
        question: "Your romantic partner wants to cool things off for a while.",
        answers: [
          {
            answer: "I'm too self-centered.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I don't spend enough time with him/her.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 33,
        subScale: "PmB",
        question: "A friend says something that hurts your feelings.",
        answers: [
          {
            answer: "She always blurts things out without thinking of others.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "My friend was in a bad mood and took it out on me.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 34,
        subScale: "PvG",
        question: "Your employer comes to you for advice.",
        answers: [
          {
            answer: "I am an expert in the area about which I was asked.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I am good at giving useful advice.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 35,
        subScale: "PvG",
        question: "A friend thanks you helping him/her get through a bad time.",
        answers: [
          {
            answer: "I enjoy helping him/her through tough times.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I care about people.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 36,
        subScale: "PsG",
        question: "You have a wonderful time at a party.",
        answers: [
          {
            answer: "Everyone was friendly.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I was friendly.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 37,
        subScale: "PvG",
        question: "Your doctor tells you that you are in good physical shape.",
        answers: [
          {
            answer: "I make sure I exercise frequently.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I am very health conscious.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 38,
        subScale: "PmG",
        question: "Your spouse (boyfriend/girlfriend) takes you away for a romantic weekend.",
        answers: [
          {
            answer: "He/she needed to get away for a few days.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "He/she likes to explore new areas.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 39,
        subScale: "PsB",
        question: "Your doctor tells you that you eat too much sugar.",
        answers: [
          {
            answer: "I don't pay much attention to my diet.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "You can't avoid sugar, it's in everything.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 40,
        subScale: "PmG",
        question: "You are asked to head an important project.",
        answers: [
          {
            answer: "I just successfully completed a similar project.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I am a good supervisor.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 41,
        subScale: "PsB",
        question: "You and your spouse (boyfriend/girlfriend) have been fighting a great deal.",
        answers: [
          {
            answer: "I have been feeling crankyand pressured lately.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "He/she has been hostile lately.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 42,
        subScale: "PmB",
        question: "You fall down a great deal while skiing.",
        answers: [
          {
            answer: "Skiing is difficult.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "The trails were icy.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 43,
        subScale: "PvG",
        question: "You win a prestigious award.",
        answers: [
          {
            answer: "I solved an important problem.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I was the best employee.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 44,
        subScale: "PvB",
        question: "Your stocks are at an all-time low.",
        answers: [
          {
            answer: "I didn't know much about the business climate at the time.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I made a poor choice of stocks.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 45,
        subScale: "PsG",
        question: "You win the lottery.",
        answers: [
          {
            answer: "It was pure chance.",
            weight: 0,
            chosen: false,
          },
          {
            answer: "I picked the right numbers.",
            weight: 1,
            chosen: false,
          }
        ]
      },
      {
        id: 46,
        subScale: "PmB",
        question: "You gain weight over the holidays and you can't lose it.",
        answers: [
          {
            answer: "Diets don't work in the long run.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "The diet I tried didn't work.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 47,
        subScale: "PsB",
        question: "You are in the hospital and few people come to visit.",
        answers: [
          {
            answer: "I'm irritable when I am sick.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "My friends are negligent about things like that.",
            weight: 0,
            chosen: false,
          }
        ]
      },
      {
        id: 48,
        subScale: "PvB",
        question: "They won't honor your credit card at a store.",
        answers: [
          {
            answer: "I sometimes overestimate how much money I have.",
            weight: 1,
            chosen: false,
          },
          {
            answer: "I sometimes forget to pay my credit-card bill.",
            weight: 0,
            chosen: false,
          }
        ]
      },
    ],
    results: {
      PmB: {},
      PmG: {},
      PvB: {},
      PvG: {},
      PsB: {},
      PsG: {},
    }
  },
  mutations: {
    answer({results}, {id, subScale, weight}) {
      results[subScale][`${subScale}-${id}`] = weight;
    },
    markChosen({questions}, {id, weight}) {
      questions.find(q => q.id === id).answers.find(a => a.weight !== weight).chosen = false;
      questions.find(q => q.id === id).answers.find(a => a.weight === weight).chosen = true;
    }
  },
  actions: {}
})
