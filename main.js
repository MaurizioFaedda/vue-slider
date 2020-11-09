var app = new Vue ({
        el: '#root',

        data: {
            // prima img visualizzata (l'img con indice 0)
            indice_img: "1",
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
            next() {
                this.indice_img += 1;
            },
            prev() {
                this.indice_img -= 1;
            }
        }
})
