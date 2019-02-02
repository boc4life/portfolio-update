var landing = new Vue({
    el: '#landingWelcome',
    data: {
        show: true,
        name: "Andrew Finkernagel",
        desc: "Ambitious Full-Stack Web Developer",
        attribute: "View My Feature Work",
        card: "",
        cardbody: ""
    },
    methods: {
        fadeout: function() {
            landing._data.show = false;
        }
    }
  })

