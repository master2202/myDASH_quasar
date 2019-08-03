import Vue from "vue";
import VueRouter from "vue-router";

//import Store from "../store/index";
import Welcome from "../views/Welcome.vue";
import Signin from "../views/welcome/Signin.vue";
import Signup from "../views/welcome/Signup.vue";
import Dash from "../views/Dash.vue";
// Home routes
import Home from "../views/dash/dashboard/Home.vue";
import Home_main from "../views/dash/dashboard/home/Home_main.vue";
// Settings routes
import Settings from "../views/dash/dashboard/Settings.vue";
import Settings_profile from "../views/dash/dashboard/settings/profile/Settings_profile.vue";
import Settings_account from "../views/dash/dashboard/settings/account/Settings_account.vue";
// People routes
import People from "../views/dash/dashboard/People.vue";
import People_posts from "../views/dash/dashboard/people/People_posts.vue";
import People_chat from "../views/dash/dashboard/people/People_chat.vue";
import People_search from "../views/dash/dashboard/people/People_search.vue";
// Apps routes
import Apps from "../views/dash/dashboard/Apps.vue";
import Apps_active from "../views/dash/dashboard/apps/Apps_active.vue";
import Apps_shop from "../views/dash/dashboard/apps/Apps_shop.vue";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [
      {
        path: "/welcome",
        component: Welcome,
        children: [
          {
            path: "signin",
            component: Signin,
            name: "signin"
          },
          {
            path: "signup",
            component: Signup,
            name: "signup"
          }
        ]
      },
      {
        path: "",
        component: Dash,
        children: [
          {
            path: "",
            component: Home,
            children: [
              {
                path: "/home",
                component: Home_main,
                name: "home"
              }
            ]
          },
          {
            path: "",
            component: Settings,
            children: [
              {
                path: "/settings/profile",
                component: Settings_profile,
                name: "profile"
              },
              {
                path: "/settings/account",
                component: Settings_account,
                name: "account",
                beforeEnter: (to, from, next) => {
                  let verify = store.dispatch("settings_account/acc_verify");
                  (async () => {
                    await verify;
                    console.log(store.state.settings_account);
                    if (store.state.settings_account.accVerify) {
                      store.state.settings_account.accVerify = false;
                      return next();
                    }
                    return next({ name: "home" });
                  })();
                }
              }
            ]
          },
          {
            path: "",
            component: People,
            children: [
              {
                path: "/people/posts",
                component: People_posts,
                name: "post"
              },
              {
                path: "/people/chat",
                component: People_chat,
                name: "chat"
              },
              {
                path: "/people/search",
                component: People_search,
                name: "search"
              }
            ]
          },
          {
            path: "",
            component: Apps,
            children: [
              {
                path: "/apps/active",
                component: Apps_active,
                name: "active"
              },
              {
                path: "/apps/shop",
                component: Apps_shop,
                name: "shop"
              }
            ]
          }
        ]
      },
      {
        path: "*",
        redirect: "/welcome/signin"
      }
    ],

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach((to, from, next) => {
    // redirect to signin page if not logged in and trying to access a restricted page
    const publicPages = ["/welcome/signin", "/welcome/signup"];
    const restrictedPage = "/";
    store.state.auth.isRestricted = restrictedPage.includes(to.path);
    store.state.isAuth = !publicPages.includes(to.path);
    const token = localStorage.getItem("token");
    const lang = localStorage.getItem("lang");
    if ((store.state.isAuth && !token) || store.state.auth.isRestricted) {
      if (lang) {
        store.state.lang = lang;
      }
      return next("/welcome/signin");
    }
    if (!store.state.isAuth) {
      if (localStorage.getItem("token")) {
        window.location.reload();
      }
      localStorage.removeItem("token");
    }
    next();
  });

  return Router;
}
