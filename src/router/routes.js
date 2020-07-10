import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/addressBook",
    name: "AddressBook",
    component: () =>
      import(/* webpackChunkName: "addressBook" */ "../views/AddressBook.vue")
  },
  {
    path: "/discover",
    name: "Discover",
    component: () =>
      import(/* webpackChunkName: "discover" */ "../views/Discover.vue")
  },
  {
    path: "/me",
    name: "Me",
    component: () => import(/* webpackChunkName: "me" */ "../views/Me.vue")
  },
  {
    path: "/demo/",
    name: "Demo",
    component: () => import(/* webpackChunkName: "demo" */ "../views/Demo.vue")
  }
];

export default routes;
