import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-theme-chalk/lib/element-#FF0000/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
// createApp(App).mount('#app')
 
// var board = Chessboard('myBoard')