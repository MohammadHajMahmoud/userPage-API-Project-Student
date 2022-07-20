// This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    loadAllData() {
        this.loadRandomUserApi()
        this.loadBacon()
        this.loadKanyeQuote()
        this.loadPoke()
    }
    loadRandomUserApi = () => {
        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=7`,
            success: data => {
                this.data.user = {
                    firstName: data.results[0].name.first,
                    lastName: data.results[0].name.last,
                    city: data.results[0].location.city,
                    state: data.results[0].location.state,
                    image: data.results[0].picture.large
                }
                this.data.friends = []
                for (let i = 0; i < 6; i++) {
                    this.data.friends.push({
                        firstName: data.results[i].name.first,
                        lastName: data.results[i].name.last
                    })
                }},
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }
    loadKanyeQuote = () => {
        $.ajax({
            method: "GET",
            url: `https://api.kanye.rest`,
            success: data => {
                this.data.quote = data.quote
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    };
    loadPoke = () => {
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${
                getRandomNumber(50)
            }`,
            success: data => {
                this.data.pokemon = {
                    name: data.name,
                    image: data.sprites.front_shiny
                }
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });

    }
    loadBacon = () => {
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=meat-and-filler`,
            success: data => {
                this.data.about = data[0]
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getData() {
        return this.data
    }
}
