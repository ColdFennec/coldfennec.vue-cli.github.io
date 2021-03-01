<template>
  <div class="joke">
    <!-- UPDATE, add the message to send prop to component -->
    <JokeInsert welcomeMsg="Time to laughs some jokes!"/>
  </div>
</template>

<script>
import JokeInsert from '@/components/JokeInsert.vue'

export default {
  name: 'Joke',
  components: {
    JokeInsert,
  }
}
</script>


<style scoped>

h3{
  margin: 20px;
  font-size: 200%;
  color:blanchedalmond
}
</style>