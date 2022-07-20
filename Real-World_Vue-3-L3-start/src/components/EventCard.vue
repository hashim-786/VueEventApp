<template>
 <router-link :to="{name: 'EventDetail', params: {id: event.id}}" class="event-link">
	 <div class="event-card">
	 <span>
	 	  {{event.time}} on {{event.date}}
	 </span>
	 <h4>{{event.title}}</h4>
	  
	 </div>
 </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
	
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.event-card{
		padding: 20px;
		width: 250px;
		cursor: pointer;
		border: 0.5px solid navy;
		transition: all 0.5s ease-in; 
		
		margin: 20px auto ;
	}
	.event-card:hover{
		transform: scale(1.03);
		box-shadow: 3px 0px 12px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		border: 1.5px solid greenyellow;
		
	}
	.event-link{
		color: black;
		text-decoration: none;
	}
	

</style>
