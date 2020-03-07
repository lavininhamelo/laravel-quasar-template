import Vue from "vue";
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
//require('./bootstrap');

window.Vue = require("vue");

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.component("app", require("./components/App.vue").default);

require("quasar/dist/quasar.min.css");
import Quasar from "quasar";
import router from "./router";

Vue.use(Quasar);

const app = new Vue({
    el: "#app",
    router
});
