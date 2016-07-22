let elem = document.querySelector('#timeType');

const opts = {
  typeSpeed: 100,
  deleteSpeed: 50,
  pauseDelay: 5000,
  loop: true,
  postfix: ''
};

malarkey(elem, opts).type('choose a background sound').pause().delete()
                    .type('meditate for a few minutes').pause().delete()
                    .type('relax your mind ;)').pause().delete();


Vue.filter('digitalClock', (seconds) => {
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
});

let clock;
const defaultSeconds = 600;

const alarm = new Audio('songs/alarm.mp3');
alarm.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

const rain = new Audio('songs/rain.mp3');
rain.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

const relax = new Audio('songs/relax.mp3');
relax.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

const interstellar = new Audio('songs/interstellar.mp3');
interstellar.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

new Vue({

  el: '#app',

  data: {
    time: defaultSeconds,
    clockPlay: false,
    ambientPlay: false,
    alarmStatus: true
  },

  methods: {
    start: function() {
      if (this.clockPlay === false) {
        this.clockPlay = true;
        this.ambientSong(true);
        clock = setInterval(()=> {
          if(this.time === 0 ) {
            this.pause();
            this.alarm();
          } else {
            this.time--;
          }
        }, 1000);
      }
    },
    pause: function() {
      this.ambientSong(false);
      this.clockPlay = false;
      clearInterval(clock);
    },
    reset: function() {
      this.pause();
      this.time = defaultSeconds;
    },
    alarm: function() {
      this.ambientSong(false);
      if (this.alarmStatus) {
        alarm.play();
        setTimeout(()=> alarm.pause(), 1300);
      }
    },
    ambientSong: function(ambientPlay) {
      if (ambientPlay) {
        switch (this.ambientPlay) {
          case "rain":
            rain.play();
            break;
          case "relax":
            relax.play();
            break;
          case "interstellar":
            interstellar.play();
            break;
        }
      } else {
        rain.pause();
        relax.pause();
        interstellar.pause();
      }
    }
  }

});
