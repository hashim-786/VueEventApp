<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/hashim.jpg" />
<event-card v-for="event in events" :key="event.id" :event="event"></event-card>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "../components/EventCard.vue";
import EventService from '../services/EventService.js'
export default {
  name: "EventList",
  components: {
    'event-card': EventCard
  },
  data(){
  return{
  	  events:null
  }
  },
  created(){
	 EventService.getEvents()
	  .then(res=>{
		 
		 this.events = res.data; 
	  })
	  .catch(err=>{
		  console.log(err)
	  })
  }
};
</script>

<style>
	img{
		height: 100px;
		width: 200px;
	}
</style>
