const app = Vue.createApp({
    data() {
        return {
            /* mensajeAlerta: alert("funciona") */
            imagenFotoPerfil: './fotoPerfil.jpg',
            imagenLogo: './logo.png',
            imagenPublicada: './imagenPublicada.jpg',
            botonSeguir: 'Seguir',
            colorBotonSeguir: true,
            numeroLikes: 200,
            dioLike: false,
            botonMegusta: "Me gusta",
            mensajeDeError: '',
            usuario:'',
            comentario:'',
            usuariosYComentarios:[],
        }
    },
    methods: {
        botonSeguirNoSeguir(){
            if (this.botonSeguir === "Seguir") {
                this.botonSeguir = "Dejar de Seguir"
                this.colorBotonSeguir = false
            }
            else{
                this.botonSeguir = "Seguir"
                this.colorBotonSeguir = true
            }
        },
        sumarORestarLikes(){
            if (!this.dioLike) {
                this.numeroLikes++
                this.botonMegusta = "No me gusta"
                this.dioLike = true
            }
            else{
                this.numeroLikes--
                this.botonMegusta = "Me gusta"
                this.dioLike = false
            }
        },
        agregarComentario(){
            if (this.comentario.trim() === "") {
                this.mensajeDeError = "No se ha ingresado un comentario"
                return
            }
            this.mensajeDeError = ""
            this.usuariosYComentarios.push({usuario: this.usuario, comentario: this.comentario})
            this.usuario = ""
            this.comentario = ""
        },
        eliminarComentario(indice){
            this.usuariosYComentarios.splice(indice, 1)
        }
    }
})

const appMontada = app.mount('#app');