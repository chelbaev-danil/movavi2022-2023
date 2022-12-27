const addr = "http://localhost:3000"

$("#getgift").click( () =>{
    axios.get(addr + '/api/gift').then((data) => {
        let gifts = data.data.list
        console.log(gifts);
        $("#gifts").html("")
        gifts.forEach(element => {
            let gift = $("<div class='gift'></div>")
            let h1 = $("<h1>").text(element.name)
            let p = $("<p>").text(element.cost)
            let strong = $("<strong>").text(element.desc)
            gift.append(h1).append(p).append(strong);
            $("#gifts").append(gift)
        });
       
    })
})


$("#getRgift").click( ()=>{
    axios.get(addr + '/api/gift').then((data) => {
        let gifts = data.data.list
        var rand = Math.floor(Math.random() * gifts.length)
        console.log(rand);
        $(".randomgift").html("")
        let Rgift = $("<div class='Rgift'></div>")
        let h1 = $("<h1>").text(gifts[rand].name)
        let p = $("<p>").text(gifts[rand].cost)
        let strong = $("<strong>").text(gifts[rand].desc)
        Rgift.append(h1).append(p).append(strong);
        $(".randomgift").append(Rgift)
    })
})