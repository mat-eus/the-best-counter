<template lang="pug">
    v-col(cols="12" class="m-2")
        h3 {{ countValue }}
</template>
<script>
export default {
  name: "AwesomeCounter",
  props: ["countValue"],
};
</script>
