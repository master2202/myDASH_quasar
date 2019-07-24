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

const routes = [
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
              let verify = Store.dispatch("acc_verify");
              (async () => {
                await verify;
                if (Store.state.settings_account.accVerify) {
                  Store.state.settings_account.accVerify = false;
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
];

//Always leave this as last one
// if (process.env.MODE !== "ssr") {
//   routes.push({
//     path: "*",
//     component: () => import("pages/Error404.vue")
//   });
// }

export default routes;
