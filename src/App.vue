<template lang="pug">
  v-app
    v-app-bar(app color="dark" dark)
      div(class="d-flex align-center")
      v-spacer
    v-main
      router-view
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
