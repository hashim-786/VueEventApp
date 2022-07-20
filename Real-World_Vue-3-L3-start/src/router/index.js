import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from '../views/About.vue'
import EventDetails from '../views/EventDetails.vue'
const routes = [
  {
    path: "/",
    name: "EVentList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventDetail",
	props: true,
    component: EventDetails
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which i s lazy-loaded when the route is visited.
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
