<template>
  <div class="joke">
    <h3>Time to laughs some jokes!</h3>
    <JokeInsert/>
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