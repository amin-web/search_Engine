const searchInput= document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event){
    if(event.code == "Enter") {
        search();
    }

});
function search()
{
    const input = searchInput.value; 
    window.location.href="https://www.google.com/search?q=" + input + "&rlz=1C1ASRM_enIN966IN966&oq=" + input +"&aqs=chrome..69i57j46i67i433j35i39j0i67j0i67i433j0i131i433j46i131i433i512j46i199i291i433i512j0i433i512j46i175i199i512.1520j0j15&sourceid=chrome&ie=UTF-8"
}