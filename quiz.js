/*
  Quick quiz bootstrap extension
*/


;(function($) {

// keep track of number of quizes added to page
var quiz_count = 0;

// add jQuery selection method to create
// quiz structure from question json file
// "filename" can be path to question json
// or javascript object
$.fn.quiz = function(filename) {
  if (typeof filename === "string") {
    $.getJSON(filename, render.bind(this));
  } else {
    render.call(this, filename);
  }
};

// create html structure for quiz
// using loaded questions json
function render(quiz_opts) {


  // list of questions to insert into quiz
  var questions = quiz_opts.questions;

  // keep track of the state of correct
  // answers to the quiz so far
  var state = {
    correct : 0,
    total : questions.length
  };

  var $quiz = $(this)
    .attr("class", "carousel slide")
    .attr("data-ride", "carousel");

  // unique ID for container to refer to in carousel
  var name = $quiz.attr("id") || "urban_quiz_" + (++quiz_count);

  $quiz.attr('id', name);

  var height = $quiz.height();


  /*
    Add carousel indicators
  */


  /*
    Slides container div
  */
  var $slides = $("<div>")
    .attr("class", "carousel-inner")
    .attr("role", "listbox")
    .appendTo($quiz);

 
  /*
    Create title slide
  */
  var $title_slide = $("<div>")
    .attr("class", "item active")
    .attr("height", height + "px")
    .appendTo($slides);
  var $img_div;
 $img_div = $('<div>')
        .attr('class', 'question-image')
        .appendTo($title_slide);
   
 $("<img>")
        .attr("class", "img-responsive")
        .attr("src", "img/datatons.png")
        .appendTo($img_div);
  $('<h1>')
    .text(quiz_opts.title)
    .attr('class', 'quiz-title')
    .appendTo($title_slide);

  var $start_button = $("<div>")
    .attr("class", "quiz-answers")
    .appendTo($title_slide);

  $("<button>")
    .attr('class', 'start-button btn')
    .text("¡Que empiece el show!")
    .click(function() {
      $quiz.carousel('next');
    })
    .appendTo($start_button);

 /*
    Create form slide
  */
  var $form_slide = $("<div>")
    .attr("class", "item")
    .attr("height", height + "px")
    .appendTo($slides);

 var $img_div;
 $img_div = $('<div>')
        .attr('class', 'question-image')
        .appendTo($form_slide);
   
 $("<img>")
        .attr("class", "img-responsive")
        .attr("src", "img/datatons.png")
        .appendTo($img_div);
 var $form_div = $('<div>')
        .attr('class', 'form_div')
        .appendTo($form_slide);

 var $divnombre =  $("<div>").attr("class", "form-input-div").appendTo($form_slide);
 var $labelnombre = $("<label>")
    .text("Nombre: ")
    .attr('class', 'quiz-form-label')
    .attr("for","nombre")
    .appendTo($divnombre);
 var $nombre = $("<input type='text' value='' />")
    .attr("id", "nombre")
    .attr("class", "quiz-form")
    .appendTo($divnombre);
 var $divapell =  $("<div>").attr("class", "form-input-div").appendTo($form_slide);
 var $labelapell = $("<label>")
    .text("Apellidos: ")
    .attr('class', 'quiz-form-label')
    .attr("for","apell")
    .appendTo($divapell);
 var $apell = $("<input type='text' value='' />")
    .attr("id", "apell")
    .attr("class", "quiz-form")
    .appendTo($divapell);
 var $divmail =  $("<div>").attr("class", "form-input-div").appendTo($form_slide);
 var $labelmail = $("<label>")
    .text("Email: ")
    .attr('class', 'quiz-form-label')
    .attr("for","mail")
    .appendTo($divmail);
 var $mail = $("<input type='text' value='' />")
    .attr("id", "mail")
    .attr("class", "quiz-form")
    .appendTo($divmail);
 var $divphone =  $("<div>").attr("class", "form-input-div").appendTo($form_slide);
 var $labelphone = $("<label>")
    .text("Teléfono: ")
    .attr('class', 'quiz-form-label')
    .attr("for","phone")
    .appendTo($divphone);
 var $phone = $("<input type='text' value='' />")
    .attr("id", "phone")
    .attr("class", "quiz-form")
    .appendTo($divphone);
 var $divselect =  $("<div>").attr("class", "form-input-div").appendTo($form_slide);
 var $labelselectf = $("<label>")
    .text("¿Qué quieres hacer? ")
    .attr('class', 'quiz-form-label')
    .attr("for","selectf")
    .appendTo($divselect);
 var $slt=$('<select>').attr("name","st").attr('class', 'quiz-form').appendTo($divselect);
 $('<option>').val(1).text('Data scientist, lo mío es extraer el jugo a los datos').attr('class', 'quiz-select-option').appendTo($slt);
 $('<option>').val(2).text('Big data, no hay elefante que se me resista').attr('class', 'quiz-select-option').appendTo($slt); 
 $('<option>').val(3).text('SysAdmin, Soy el maestro de las llaves de Matrix…').attr('class', 'quiz-select-option').appendTo($slt); 
 $('<option>').val(4).text('Marketing, tengo un montón de maneras de hacerte ganar pasta').attr('class', 'quiz-select-option').appendTo($slt);
 $('<option>').val(5).text('Business Development, Show me the moneyyyyy! ').attr('class', 'quiz-select-option').appendTo($slt); 
 $('<option>').val(6).text('CEO, porque tiene que  haber de todo').attr('class', 'quiz-select-option').appendTo($slt);
 var $divlocation =  $("<div>").attr("class", "form-input-div").appendTo($form_slide);
 var $labellocation = $("<label>")
    .text("Donde vives: ")
    .attr('class', 'quiz-form-label')
    .attr("for","location")
    .appendTo($divlocation);
 var $location = $("<input type='text' value='' />")
    .attr("id", "location")
    .attr("class", "quiz-form")
    .appendTo($divlocation);

 var $start_button = $("<div>")
    .attr("class", "quiz-answers")
    .appendTo($form_slide);


var $indicators = $('<ol>')
    .attr('class', 'progress-circles')

  $("<button>")
    .attr('class', 'start-button btn')
    .text("¡Que empiece el show!")
    .click(function() {
    $quiz.carousel('next');
      $indicators.addClass('show');

    $(".active .quiz-button.btn").each(function(){
      console.log(this.getBoundingClientRect())
      $(this).css("margin-left", function(){
        return ((250 - this.getBoundingClientRect().width) *0.5) + "px"
      })
    })
    })
    .appendTo($start_button);
  
  $indicators
    .appendTo($quiz);

  $.each(questions, function(question_index, question) {
    $('<li>')
      .attr('class', question_index ? "" : "dark")
      .appendTo($indicators);
  });

  /*
    Add all question slides
  */
  $.each(questions, function(question_index, question) {

    var last_question = (question_index + 1 === state.total);

    var $item = $("<div>")
      .attr("class", "item")
      .attr("height", height + "px")
      .appendTo($slides);
    var $img_div;
    if (question.image) {
      $img_div = $('<div>')
        .attr('class', 'question-image')
        .appendTo($item);
      $("<img>")
        .attr("class", "img-responsive")
        .attr("src", question.image)
        .appendTo($img_div);
    }
    $("<div>")
      .attr("class", "quiz-question")
      .html(question.prompt)
      .appendTo($item);

    var $answers = $("<div>")
      .attr("class", "quiz-answers")
      .appendTo($item);

    // if the question has an image
    // append a container with the image to the item


    // for each possible answer to the question
    // add a button with a click event
    $.each(question.answers, function(answer_index, answer) {

      // create an answer button div
      // and add to the answer container
      var ans_btn = $("<div>")
        .attr('class', 'quiz-button btn')
        .html(answer)
        .appendTo($answers);

      // This question is correct if it's
      // index is the correct index
      var correct = (question.correct.index === answer_index);

      // default opts for both outcomes
      var opts = {
        allowOutsideClick : false,
        allowEscapeKey : false,
        confirmButtonText: "Siguiente Pregunta",
        html : true,
        confirmButtonColor: "#0096D2"
      };

      // set options for correct/incorrect
      // answer dialogue
      if (correct) {
        opts = $.extend(opts, {
          title: "¡Muy bien!",
          text: "Bien hecho" + (
            question.correct.text ?
            ("<div class=\"correct-text\">" +
              question.correct.text +
              "</div>"
            ) : ""),
          type: "success"
        });
      } else {
        opts = $.extend(opts, {
          title: "¡Mal!",
          text: (
            "No, no es esa<br/><br/>" +
            "La respuesta correcta era \"" +
            question.answers[question.correct.index] + "\"." + (
            question.correct.text ?
            ("<div class=\"correct-text\">" +
              question.correct.text +
              "</div>"
            ) : "")
            ),
          type: "error"
        });
      }

      if (last_question) {
        opts.confirmButtonText = "Ver los resultados";
      }

      // bind click event to answer button,
      // using specified sweet alert options
      ans_btn.on('click', function() {

        function next() {
          // if correct answer is selected,
          // keep track in total
          if (correct) state.correct++;
          $quiz.carousel('next');

          // if we've reached the final question
          // set the results text
          if (last_question) {
		var data = $nombre.val()+"|"+$apell.val()+"|"+$mail.val()+"|"+$phone.val()+"|"+$slt.val()+"|"+$location.val()+"|"+state.correct
	      $.post( "http://127.0.0.1:8082", data );
            $results_title.html(resultsText(state));
            $results_ratio.text(
              "¡Has obtenido " +
              Math.round(100*(state.correct/state.total)) +
              "% de las preguntas correctas!"
            );
             $indicators.removeClass('show');
            // indicate the question number
            $indicators.find('li')
              .removeClass('dark')
              .eq(0)
              .addClass('dark');
          } else {
            // indicate the question number
            $indicators.find('li')
              .removeClass('dark')
              .eq(question_index+1)
              .addClass('dark');
          }
          // unbind event handler
          $('.sweet-overlay').off('click', next);
        }

        // advance to next question on OK click or
        // click of overlay
        swal(opts, next);
        $('.sweet-overlay').on('click', next);

      });

    });


  });


  // final results slide
  var $results_slide = $("<div>")
    .attr("class", "item")
    .attr("height", height + "px")
    .appendTo($slides);

 var $img_div2;
 $img_div2 = $('<div>')
        .attr('class', 'question-image')
        .appendTo($results_slide);
   
 $("<img>")
        .attr("class", "img-responsive")
        .attr("src", "img/datatons.png")
        .appendTo($img_div2);

  var $results_title = $('<h1>')
    .attr('class', 'quiz-title')
    .appendTo($results_slide);

  var $results_ratio = $('<div>')
    .attr('class', 'results-ratio')
    .appendTo($results_slide);

  var $restart_button = $("<div>")
    .attr("class", "quiz-answers")
    .appendTo($results_slide);

  var $social = $("<div>")
    .attr('class', 'results-social')
    .appendTo($results_slide);

  var $twitter_link = $('<a>')
      .appendTo($social);

  var $facebook_link = $('<a>')
    .appendTo($social);


  $("<button>")
    .attr('class', 'quiz-button btn')
    .text("Try again?")
    .click(function() {
      state.correct = 0;
      $nombre.val('');
      $apell.val('');
      $mail.val('');
      $phone.val('');
      $location.val('');
      $quiz.carousel(0);
    })
    .appendTo($restart_button);

  $quiz.carousel({
    "interval" : false
  });

  $(window).on('resize', function() {
    $quiz.find(".item")
      .attr('height', $quiz.height() + "px");
  });

}

function resultsText(state) {

  var ratio = state.correct / state.total;
  var text;

  switch (true) {
    case (ratio === 1):
      text = "Pero tú eres un p**** Crack!!! A tu lado Doug Cutting es un analfabeto!";
      break;
    case (ratio > 0.8):
      text = "Uysss, por poco consigues reventar las cifras. Pedazo futuro tienes por delante, baby!";
      break;
    case (ratio > 0.5):
      text = "No está nada mal..con un par de horas más de sueño nos habrías dejado boquiabiertos";
      break;
    case (ratio < 0.5 && ratio !== 0):
      text = "Bueno, estás un poco verde...¿seguro que es a esto a lo que te quieres dedicar?";
      break;
    case (ratio === 0):
      text = "Tú lo sabes, yo lo sé... mejor que te dediques a la cría de ajos... los datos no son lo tuyo.";
      break;
  }
  return text;

}





})(jQuery);

