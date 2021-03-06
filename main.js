var app = new Vue ({
        el: '#root',

        data: {
            // prima img visualizzata (l'img con indice 0)
            indice_img: 0,
            index: '',


            // creo un array con i link delle miei img
            imgs: [
                "images/natura1.jpg",
                "images/natura2.jpg",
                "images/natura3.jpg",
                "images/natura4.jpg",
                "images/natura5.jpg"

            ]


        },

        methods: {
            interval: function() {
              setInterval(() => {
                  this.indice_img += 1;
                   if (this.indice_img > 4){
                       this.indice_img = 0;
                   }
               }, 2000)
           },
            next() {
                this.indice_img += 1;

                if (this.indice_img > 4){
                    this.indice_img = 0;
                }
            },
            prev() {
                this.indice_img -= 1;
                if (this.indice_img < 0){
                    this.indice_img = this.imgs.length -1;
                }

            },
            change(index) {

                this.indice_img = index;

            }
        },

        created() {
            this.interval()
      }
})
