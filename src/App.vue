<template>
  <MyHeader></MyHeader>
  <IntroductionItem></IntroductionItem>
  <MainContent></MainContent>
  <player-item></player-item>
  <modal></modal>
</template>

<script>
import MyHeader from './components/header-item.vue';
import IntroductionItem from './components/Introduction-item.vue';
import MainContent from './components/Main-Content.vue'
import PlayerItem from './components/Player-item.vue';
import Modal from './components/Modal-item.vue';

export default {
  name: 'appMain',
  components: {
    MyHeader,
    IntroductionItem,
    PlayerItem,
    MainContent,
    Modal,
  },
};
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
