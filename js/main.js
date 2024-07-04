$(".nav-open").click(() => {
  $("#navMenu").animate({ width: "25%" }, 700);
});

$(".close-btn").click(() => {
  $("#navMenu").animate({ width: 0 }, 700);
});

$(".singer h3").click((e) => {
  if ($(e.target).attr("class") == "one") {
    $("#one").slideToggle(1000);
    $("#two").slideUp(1000);
    $("#three").slideUp(1000);
    $("#four").slideUp(1000);
  } else if ($(e.target).attr("class") == "two") {
    $("#two").slideToggle(1000);
    $("#one").slideUp(1000);
    $("#three").slideUp(1000);
    $("#four").slideUp(1000);
  } else if ($(e.target).attr("class") == "three") {
    $("#three").slideToggle(1000);
    $("#two").slideUp(1000);
    $("#one").slideUp(1000);
    $("#four").slideUp(1000);
  } else if ($(e.target).attr("class") == "four") {
    $("#four").slideToggle(1000);
    $("#two").slideUp(1000);
    $("#three").slideUp(1000);
    $("#one").slideUp(1000);
  }
});

$("textarea").keyup(() => {
  let massageLenght = 0;
  let massageMaxLenght;
  let massageRemaning;

  massageLenght = $("textarea").val().toString().length;
  massageMaxLenght = $("textarea").attr("maxlength");
  massageRemaning = massageMaxLenght - massageLenght;

  $("#massageRemaning").text(massageRemaning);
});

let futureDate = new Date("2027-03-31 10:00:00").getTime();

setInterval(() => {
  let dateNow = new Date().getTime();

  let deff = futureDate - dateNow;

  let days = Math.floor(deff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((deff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((deff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((deff % (1000 * 60)) / 1000);

  $("#days").html(`<p class="fs-4">-${days} D</p>`);
  $("#hours").html(`<p class="fs-4">${hours} h</p>`);
  $("#minutes").html(`<p class="fs-4">${minutes} m</p>`);
  $("#seconds").html(`<p class="fs-4">${seconds} s</p>`);
}, 1000);
