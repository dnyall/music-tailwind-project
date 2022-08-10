<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggleModalInner()">Login / Register</a>
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  // name: 'MyHeader',
  methods: {

    ...mapMutations(['toggleModal']),
    toggleModalInner() {
      // به جای این حرکت :
      // this.$store.state.modalShow = !this.$store.state.modalShow;
      // این حرکت رو میزنیم :
      this.$store.commit('toggleModal');
    },
  },
};
</script>
