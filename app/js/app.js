Vue.filter('format', function (seconds) {
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);
    var timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
})


var seconds = 600;

var app = new Vue({
  el: '#app',
  data: {
    time: seconds
  },
  methods: {
    start: function () {
      console.log("start")
    },
    pause: function () {
      console.log("pause")
    }
  }
})
