import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from './routes/index'
import store from './store/index'
import './reset.less'
import LegoBricks from 'lego-bricks'

createApp(App)
.use(Antd)
.use(LegoBricks)
.use(router)
.use(store)
.mount("#app");
