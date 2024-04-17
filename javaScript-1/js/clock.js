
let spanElement=document.querySelector("#myName")
let firstName=prompt("Adınız nedir?")


spanElement.innerHTML=firstName

function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = today.getDay();
    var g = days[day];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s+" "+g;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
