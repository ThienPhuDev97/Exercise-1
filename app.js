new Vue({
    el: '#exercise',
    data: {
        name: 'Max',
        age: 27,
        image: 'https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_07_04/cristiano-ronaldo-3776.jpeg'
    },
    methods: {
        random: function() {
          return Math.random();
      }
    }
});