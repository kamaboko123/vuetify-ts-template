import Vue from "vue";
import App from "./App";
import vuetify from "./vuetify";

new Vue({
    vuetify,
    render: h => h(App)
}).$mount("#app");
