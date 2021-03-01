<template>
    <div id="joke">
        <!-- UPDATE, add header from message to get props from view-->
        <h3> {{ welcomeMsg }} </h3>
        <!-- https://bootstrap-vue.org/docs/components/button -->
        <!-- UPDATE, Change "bootstrap" to "bootstrap-vue" as was misunderstod about reqiure.-->
        <b-button size="lg" variant="primary" @click="fetchJokes"> {{ joketext }}</b-button>

        <!--If statement if joke list active and loop in range of all jokes  -->
        <div v-if="JokeList">
            <dl v-for="Joke in JokeList" :key="(Joke.setup, Joke.punchline)">
                <dt>{{Joke.setup}}</dt>
                <dd>{{Joke.punchline}}</dd>
            </dl>
        </div>
        <!-- Else as waiting or pending -->
        <div v-else>
            <div id="loadingBox"> {{ loading }} </div>
        </div>

    </div>
</template>

<script>
export default {

    // UPDATE, add props to obtain from view message.
    props: {
        welcomeMsg: String
    },

    // Return value as default before start
    data() {    
        return {
            clicked: "You have not clicked yet..",
            totalClick: "",
            JokeList: null,
            WordSearch: null,
            JokeSetUp: this.JokeList,
            JokeCheck: {},
            loading: "Waiting Order..",
            joketext: "Time to get some joke!"
        }
    },


    methods: {
        //Test run if console logged in with name 
        handleClick: function() {
        console.log(this.name)
        },

        // Fetching function jokes as default with 10 value
        fetchJokes: function() {  
            this.loading = "Loading jokes..."
            // Added Axios due of "powerful"
            const axios = require("axios")
            axios.get("https://official-joke-api.appspot.com/jokes/general/ten")
                .then((response) => {
                    this.JokeList = response.data
                })

            this.joketext = "Get new jokes again!"
        },
    },


  
}
</script>

<style scoped>

#revealed{
    display: block;
}

/* Style for container joke box */
dl {
    margin: 50px 150px 50px 150px;
    padding: 0.5%;
    border: 5px solid black;
    border-radius: 20px;
    background-color:rgb(0, 111, 157);
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

#loadingBox{

    /* Style Border, color and position */
    border: 5px solid black;
    border-radius: 30px;
    margin: 50px 150px 50px 150px;
    padding: 50px;
    background-color: rgb(0, 111, 157);


    /* Text style */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 175%;
    color: blanchedalmond;
}

h3 {
    border: 5px solid black;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%;
    padding: 20px;
    background-color: rgb(0, 111, 157);
    color: white;
}
</style>