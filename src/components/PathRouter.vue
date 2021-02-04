<template>
  <div id="mainContain">
    <h2 id="headerText">Fetch That Joke!</h2>
    <div id="nav">
      <router-link to="/">Joke Page</router-link> |
      <router-link to="/about">About Page</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>

/* Konstig del eftersom detta fungerar tidigare men nu gör det inte och solution är bara vid index.html med sätt kod i body med style background color */
body {background-color: blue;}
#mainContain {
  text-align: center;
}

#headerText{
  /* Style for header text container */
  border: 5px solid black;
  border-radius: 25px;
  margin: 50px 125px 25px 125px;
  padding: 20px;
  background-color: rgb(0, 111, 157);

  /* Style for header text */
  font-size: 50px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #ffffff;
}


/* Style for nav link */
#nav {
  width: 400px;
  border: 5px solid black;
  border-radius: 25px;
  margin: 0 auto;
  padding: 10px;
  font-size: 30px;

  background-color: rgb(0, 111, 157);
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #111111;
}
</style>
