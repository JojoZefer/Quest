let answers = [   
  [""],
"Гаррш Поттер",
"Губка Боб",      
"Пірати Карибського моря",
"Сімпсони",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
];

let inputWorlds = [];

let progress = 0;

let num = Math.floor(1 + Math.random() * 10);

$(document).ready(function(){
//alertify.alert("hello");
$('.progress').knob({
'min' : 0,
'max' : 5,
'angleArc' : 120,
'angleOffset' : -60,
'readOnly' : true,
'width' : "100%",
'thickeness' : 0.2,
'displayInput' : false,
'bgColor' : "#caeaee",
'fgColor' : "#6dcbd7",
'lineCap' : 'round'
});

$(document).ready(function(){
  //alertify.alert("hello");
  $('.progress').knob({
  'min' : 0,
  'max' : 5,
  'angleArc' : 120,
  'angleOffset' : -60,
  'readOnly' : true,
  'width' : "100%",
  'thickeness' : 0.2,
  'displayInput' : false,
  'bgColor' : "#caeaee",
  'fgColor' : "#6dcbd7",
  'lineCap' : 'round'
  });

$('#rules').slideup();
$('.slideRebus').click(() => {
    $('#rules').slideToggle();
});



$('#btnTask').click(() => {
  if($('#inputTask').val().toLowerCase() == `${answers[num-1]}`){
      alertify.seccess("You right");
      ;('#inputTask').val("");
      progress++;
      $('.progress').val(proggress).trigger('cahnge')
      inputWorlds.push(num);

      console.log(inputWorlds);
      do {
          num = Math.floor (1 + Math.random() * 10);
       } while (inputWorlds.includes(num));
        startRebus(num)
    }    else {
          $('.img, #btnTask, #inputTask').css({
'display' : 'none'

          });
       

          $('#nextTask').css({
            'display' : 'none'
                      });
                    }
                    } else {
                        alertify.error("You isn't right try again")
      }
     }
});
});

function startRebus(arg) {
    $('#picture').attr("src", `rebuses/${arg}`.png );
}

function startTime() {
  setInterval(function(){
    time = parseInt(localStorage.getItem("time"))
    if (time == 0){
      alertify.error("Time is out!")
      setTimeout(()=>{
        window.open("index2.html", "_self", false );
      }, 3000 )
    }
    localStorage.setItem("time", time);
    console.log(time);
  },1000)
}

