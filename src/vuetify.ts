import Vue from "vue";
import Vuetify from "vuetify";
import CONFIG from "./config.json";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

export default new Vuetify({
    theme: {
        dark: CONFIG.app.enable_default_darkmode
    },
    icons: {
        iconfont: "mdi"
    }
});

Vue.use(Vuetify);
