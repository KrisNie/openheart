import Vue from 'vue'

new Vue({
  created: function () {
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    name: {
      // getter
      get: function () {
      },
      // setter
      set: function (newValue) {
      }
    }
  },
  watch: {
  }
});
