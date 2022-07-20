const api = new APIManager()
const render = new Renderer()

$("#loadUserData").on("click", function () {
    api.loadAllData()
    console.log(api.data)
})

$("#displayUserData").on("click", function () {
    render.renderAll(api.data)
    render.renderFriends(api.data.friends)
})
$("#saveUserData").on("click",function(){
    localStorage.clear()
    localStorage.data = JSON.stringify(api.data)
})
$("#displaySavedUser").on("click",function(){
    const data = JSON.parse(localStorage.data)
    render.renderAll(data)
    render.renderFriends(data.friends)
})