import Vue from "vue";
import Vuex from "vuex";

// MAIN Modules
import app from "./main/app";
import welcome from "./main/welcome";
import mydash from "./main/mydash";
import auth from "./main/auth";
import lang from "./main/lang";
import fullscreen from "./main/fullscreen";

// SIDE Modules
// friends
import friends_main from "./friends/friends_main";
import friends_list from "./friends/friends_list";
// applications
import applications_main from "./applications/applications_main";

// DASH Modules
// apps
import apps_main from "./dash/apps/apps_main";
import apps_active from "./dash/apps/apps_active";
import apps_shop from "./dash/apps/apps_shop";
// home
import home_main from "./dash/home/home_main";
// people
import people_main from "./dash/people/people_main";
import people_post from "./dash/people/people_post";
import people_search from "./dash/people/people_search";
import people_chat from "./dash/people/people_chat";
import people_connect from "./dash/people/people_connect";
// settings
import settings_main from "./dash/settings/settings_main";
import settings_profile from "./dash/settings/settings_profile";
import settings_account from "./dash/settings/settings_account";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      app,
      welcome,
      mydash,
      auth,
      lang,
      fullscreen,
      friends_main,
      friends_list,
      applications_main,
      apps_main,
      apps_active,
      apps_shop,
      home_main,
      people_main,
      people_post,
      people_search,
      people_chat,
      people_connect,
      settings_main,
      settings_profile,
      settings_account
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    //strict: process.env.DEV
    strict: false
  });

  return Store;
}
