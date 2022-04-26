<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://contaja.com.br/wp-content/themes/contaja/images/hero-trocar-de-contador-contabilidade-online.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to The Best Counter
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other the best counter developers,
          <br />please join contribute to our repository
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Repository</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn color="dark" rounded @click="true">
          <v-icon>mdi-minus-circle-outline</v-icon>
        </v-btn>
        <v-btn color="dark" rounded @click="true">
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
