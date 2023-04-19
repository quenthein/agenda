<template>
  <v-app>
    <v-main>
      <AjoutContact/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AjoutContact from './components/AjoutContact.vue'

export default defineComponent({
  name: 'App',

  components: {
    AjoutContact,
  },

  data () {
    return {
      //
    }
  },
})
</script>
