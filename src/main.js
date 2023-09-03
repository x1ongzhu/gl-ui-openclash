import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import GlCard from "@/components/GlCard.vue";
import GlTitle from "@/components/GlTitle.vue";
import GlButton from '@/components/GlButton.vue'

import "./styles/base.css";
import "./styles/default/index.css";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.css";
import "./styles/iconfont.css";

Vue.use(ElementUI);
Vue.component("gl-card", GlCard);
Vue.component("gl-title", GlTitle);
Vue.component("gl-button", GlButton);
new Vue({
    render: (h) => h(App),
}).$mount("#app");
