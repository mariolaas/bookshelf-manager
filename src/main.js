// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "@/plugins/vuetify";
import firebase from "firebase";
import "./components/firebaseInit";

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: "#app",
      vuetify,
      router,
      components: { App },
      template: "<App/>"
    }).$mount("#app");
  }
});
