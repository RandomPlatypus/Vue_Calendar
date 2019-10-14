import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDUMjNlW6h8se6a13wMu6Nxn3TeTVbjpX8",
  authDomain: "vue-calendar-607cc.firebaseapp.com",
  databaseURL: "https://vue-calendar-607cc.firebaseio.com",
  projectId: "vue-calendar-607cc",
  storageBucket: "vue-calendar-607cc.appspot.com",
  messagingSenderId: "728841652757",
  appId: "1:728841652757:web:ce79bb98353582aa271c1c"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
