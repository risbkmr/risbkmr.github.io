function scrollfun(){
    var wrapper = document.querySelector('.wrapper');
    var themetag = document.querySelector('#themetag');
    var y = wrapper.scrollTop;

    console.log(y)
    if(y >= 0 && y < window.innerWidth){
        themetag.setAttribute('content', '#ed143d')
    }
    if(y >= window.innerHeight && y < 2 *window.innerHeight){
        themetag.setAttribute('content', '#2fbf71')
    }
    if(y >= 2 * window.innerHeight && y < 3 * window.innerHeight){
        themetag.setAttribute('content', '#9c27b0')
    }
    if(y >= 3 * window.innerHeight && y < 4 * window.innerHeight){
        themetag.setAttribute('content', '#ed7d3a')
    }
    if(y >= 4 * window.innerHeight && y < 5 * window.innerHeight){
        themetag.setAttribute('content', '#363537')
    }
    console.log(themetag.content)
}