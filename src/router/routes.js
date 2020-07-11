import Home from "../views/Home.vue";
import WeChat from "../views/WeChat.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "WeChat",
        component: WeChat
      },
      {
        path: "/addressBook",
        name: "AddressBook",
        component: () =>
          import(
            /* webpackChunkName: "addressBook" */ "../views/AddressBook.vue"
          )
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
      }
    ]
  },
  {
    path: "/chat/:userid",
    name: "Chat",
    component: () => import(/* webpackChunkName: "chat" */ "../views/Chat.vue")
  },
  {
    path: "/mini/:miniid",
    name: "Mini",
    meta: {
      transtionPageType: "fade"
    },
    component: () =>
      import(/* webpackChunkName: "chat" */ "../views/AddressBook.vue")
  },
  {
    path: "/demo/",
    name: "Demo",
    component: () => import(/* webpackChunkName: "demo" */ "../views/Demo.vue")
  }
];

export default routes;
