var contatos = [
    {
        nome: "João",
        cel: "54879887",
        foto: "anitta.jpg",
        favorito: true
    },
    {
        nome: "Luis",
        cel: "54988754",
        foto: "anitta.jpg",
        favorito: true
    },
    {
        nome: "Júlia",
        cel: "54326598",
        foto: "anitta.jpg"        ,
        favorito: true
    },
    {
        nome: "Luiza",
        cel: "21326598",
        foto: "anitta.jpg",
        favorito: false
    },
    {
        nome: "Vitória",
        cel: "54987982",
        foto: "anitta.jpg",
        favorito: true
    },
    {
        nome: "Ludy",
        cel: "54987982",
        foto: "anitta.jpg",
        favorito: false
    }
]

const agenda = {
    data(){
        return {
            titulo: "Minha agenda de contatos com Vue",
            msg: "Olá, Vue",
            contatos: window.contatos
        }
    }
}
Vue.createApp(agenda).mount("#app");