class Renderer {
    renderAll(data) {
        this.renderUser(data)
        this.renderKanyeQuote(data)
        this.renderMeat(data)
        this.renderPoke(data)
    }
    renderUser = (data) => {
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source)
        const somehtml = template(data);
        $(".user-container").append(somehtml)
    }
    renderFriends = (data) => {
        $(".friends-container").empty()
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ data })
        $(".friends-container").append(newHTML)
    }
    renderPoke = (data) => {
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source)
        const somehtml = template(data);
        $(".pokemon-container").append(somehtml)
    }
    renderMeat = (data) => {
        $(".meat-container").empty()
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source)
        const somehtml = template(data);
        $(".meat-container").append(somehtml)
    }
    renderKanyeQuote = (data) => {
        $(".quote-container").empty()
        const source = $('#kanye-template').html();
        const template = Handlebars.compile(source)
        const somehtml = template(data);
        $(".quote-container").append(somehtml)
    }
}
