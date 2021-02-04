<template>
    <div id="about">
        <div id="Introduction" :style="{ color: mainColor }">
            <h3>What is this website about?</h3>
            <p>This is a project website as learning and also understand of vue javascript and vue cli. This is just a showcase
                for how much understand I do, very much hard time due of same code but different set up like compnents look.
                I do not own any Json data file, this is a simple fetch from GET their API key and showcase list of jokes random.
                This is just a project work.
            </p>
            <div v-if="whoMadeThis">
                <h2>Credit goes to:</h2>
                <div v-for="index of whoMadeThis" :key="(index.name, index.genre, index.work)">
                    <div id="Profile">
                        <h3 id="customH3"> {{ index.name }} </h3>
                        <p>As {{ index.genre }} who created this {{ index.work }}.</p>
                    </div>
                </div>
            </div>
            
            <div id="SupportHim">
                <p> Check out David_Katz links! </p>
                <a href="https://davidtkatz.com/#/about"> David_Katz's home page </a>
                <a href="https://github.com/15Dkatz/official_joke_api"> Official Joke Api Json </a>
            </div>

            
        </div>

        <!-- Customize Joke to check how jokes output would look like -->
        <div id="CustomJoke">
            <!-- Set up for container with input to send v-model to data and return value same as input -->
            <div id="InputSetup"> 

                <label>Customize your joke how would look.</label>

                <div id="margin-space">
                    <label>Joke Header Line:</label>
                    <input v-model="InputJoke" placeholder="Main joke header">
                </div>

                <div id="margin-space">
                    <label>Joke Punch Line:</label>
                    <input v-model="AnswerJoke" placeholder="Joke answer punch line">
                </div>
            </div>

            <!-- Contain as normal output -->
            <dl>
                <dt>{{ InputJoke }}</dt>
                <dd>{{ AnswerJoke}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
  name: 'About',
  data (){
    return {
      whoMadeThis: [
       {name: 'ColdFennec', genre: 'Student', work: "Website with Vue Cli under project"},
       {name: 'David_Katz', genre: 'Software engineer', work: "API Json Joke"}
      ],

      InputJoke: "Your main header set up joke",
      AnswerJoke: "Your punch line joke.",

      mainColor: "cornsilk"
    }
  }
}
</script>
<style scoped>

#Introduction {
    border: 5px solid black;
    border-radius: 20px;
    margin: 20px 150px 20px 150px;
    padding: 20px;
    background-color:rgb(0, 111, 157);
    color: white;
    font-size: 125%;
}

#customH3 {
    text-decoration: underline;
    font-weight: 600;
    font-family: Comic Sans MS, Comic Sans, cursive;
    color: black;
}

#InputSetup {
    border: 5px solid black;
    border-radius: 20px;
    margin: 20px 150px 20px 150px;
    color: blanchedalmond;
    background-color: rgb(0, 111, 157);
    text-align: left;
}

#margin-space{
    padding: 10px;
}

#SupportHim {
    color: black;
    font-weight: 500;
    font-size: 100%;
}

a {
    color: seashell;
    margin: 20px;
}

input {
    height: 40px;
    width: 100%;
    border: 3px solid black;
    border-radius: 5px;
}

label{
    font-size: 25px;
    margin: 10px;
}

dl {
    margin: 50px 150px 50px 150px;
    padding: 0.5%;
    border: 5px solid black;
    border-radius: 20px;
    background-color: rgb(0, 111, 157);
}

/* Style for setup header joke */
dt{
    color: rgb(151, 255, 156);
    font-size: 150%;
    text-align: center;
    margin: 25px 0px -10px 0px;
}

/* Style for punchline answer joke */
dd{
    color: rgb(255, 255, 255);
    font-size: 125%;
    text-align: center;
    margin: 20px;
}
</style>