<template lang="pug">
  v-container
    v-row(class="text-center")
      v-col(cols="12")
        v-img(src="https://contaja.com.br/wp-content/themes/contaja/images/hero-trocar-de-contador-contabilidade-online.png"
              class="my-3"
              contain
              height="200")

      v-col(class="mb-4")
        h1(class="display-2 font-weight-bold mb-3")
          | Welcome to The Best Counter

        p(class="subheading font-weight-regular")
          | For help and collaboration with other the best counter developers,
          br 
          | please join contribute to our repository
          a(href="https://community.vuetifyjs.com" target="_blank") Repository

      v-col(cols="12" class="m-2")
        h3 {{ count }}
      
      v-col(class="mb-5" cols="12")
        v-badge(:value="hoverDecremet"
                color="black accent-4"
                content="decrement"
                left
                transition="slide-x-transition")
          v-hover(v-model='hoverDecremet')
            v-btn(class="mr-5" color="dark" rounded @click="decrement")
              v-icon mdi-minus-circle-outline
        v-badge(:value="hoverIncremet"
                color="black accent-4"
                content="increment"
                transition="slide-y-transition")
          v-hover(v-model='hoverIncremet')
            v-btn(color="dark" rounded @click="increment")
              v-icon mdi-plus-circle-outline
</template>

<script>
import { AwesomeCounter } from "@/components/AwesomeCounter.vue";
export default {
  name: "MainContent",
  data: () => ({
    hoverDecremet: false,
    hoverIncremet: false,
  }),
  components: {
    AwesomeCounter,
  },
  // método retorna
  computed: {
    count: {
      set(newCount) {
        this.$store.commit("setCount", newCount);
      },
      get() {
        return this.$store.state.count;
      },
    },
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    decrement() {
      this.count = this.count - 1;
    },
  },
};
</script>
