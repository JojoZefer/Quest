let progress = 0;
let time;
let timeStorage = localStorage;

if (timeStorage.getItem("time") != null){
    time = parseInt(timeStorage.getItem("time"))
} else {
    time = 300;
    timeStorage.setItem("time", time);
}

let firstCard = null;
let secondCard = null;

let cards = [
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2,
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3,
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4,
    },
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5,
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6,
    },
    {
        name: "photoshop",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
        id: 7,
    },
    {
        name: "phyton",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
        id: 8,
    },
    {
        name: "rails",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
        id: 9,
    },
    {
        name: "sass",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
        id: 10,
    },
    {
        name: "sublime",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
        id: 11,
    },
    {
        name: "wordpress",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
        id: 12,
    },
]

$(document).ready(function(){
    $('.progress').knob({
        'min' : 0,
        'max' : 12,
        'angleArc' : 120,
        'angleOffset' : -60,
        'readOnly' : true,
        'width' : "100%",
        'thickness' : 0.2,
        'displayInput' : false,
        'bgColor' : "#caeeca",
        'fgColor' : "#398d0b",
        'lineCap' : 'round'
    });

    $('.time').knob({
        'min' : 0,
        'max' : 300,
        'angleArc' : 360,
        'angleOffset' : 0,
        'readOnly' : true,
        'width' : "100%",
        'thickness' : 0.2,
        'displayInput' : false,
        'bgColor' : "#caeeca",
        'fgColor' : "#398d0b",
        'lineCap' : 'butt'
    });

    $('#rules').slideUp();
    $('.slideRebus').click(() => {
        $('#rules').slideToggle();
    });

    $('#start').click(() => {
        $("#start").css('display', 'none');
        $(".sound").css('display', 'block');
        fillBoard();
        $(".card").on("click", cardClicked);
        startTime();
    });
});

function cardClicked() {
    if(secondCard || $(this).hadClass("matched")) {
        return;
    }
    if (!firstCard) {
        firstCard = $(this);
        firstCard.addClass("flip")
        return;
    }
    if (firstCard && !($(this).hadClass("flip"))) {
        secondCard = $(this);
        secondCard.addClass("flip")
        if(firstCard.attr("data-id") == secondCard.attr("data-id")) {
            firstCard.addClass("matched");
            secondCard.addClass("matched");
            firstCard = null;
            secondCard = null;
            $(".progress").val(progress).trigger("change");
            if (progress == 12) {
                win()
            }
            return;
        } else {
            setTimeout (function () {
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null;
                secondCard = null;
            }, 700); 
        }
    }
}
function win() {
  $(".gameBoard").css({
    display : "none",
  }) ;

  $(".win").css({
    display : "flex",
  }) ;
  localStorage.removeItem("time");
}

function fillBoard(){
    let board = shuffle([...cards, ...cards]);
    for (let i = 0; i < board.length; i++){
        let cardHTML = `
        <div class="card" data-id="${board[i].id}">
            <div class="front">ROBOCODE</div>
            <div class="back">
                <img src="${board[i].img}" alt="${board[i].name}">
            </div>
        </div>
        `;
        $('.gameBoard').append(cardHTML);
    }
}

function shuffle(array){
    let counter = array.length;
    let temp;
    let index;

    while (counter > 0){
        index = Math.floor(Math.random() *counter);
        counter--;

        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function startTime(){
    // localStorage.setItem("time", 10);
    setInterval(function(){
        time = parseInt(localStorage.getItem("time")) - 1;
        $('.time').val(time).trigger('change');
        if (time == 0){
            alertify.error("Time is out!");
            setTimeout(()=>{
                window.op
                function startTime(){
                  // localStorage.setItem("time", 10);
                  setInterval(function(){
                      time = parseInt(localStorage.getItem("time")) - 1;
                      $('.time').val(time).trigger('change');
                      if (time == 0){
                          alertify.error("Time is out!");
                          setTimeout(()=>{
                              window.open("index2.html", "_self", false);
                          }, 3000);
                          localStorage.removeItem("time");
                      } else if(time > 0){
                          localStorage.setItem("time", time);
                      }
                      console.log(time);
                  },1000)
                }