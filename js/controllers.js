// $("#rewind").click(function() {
//   console.log("rewind")
// });
//
// $("#step_back").click(function() {
//   console.log("stepback")
// });
//
// $("#play_pause").click(function() {
//   console.log("play/pause")
// });
//
// $("#step_foward").click(function() {
//   console.log("stepfoward")
// });
//
// $("#fast_foward").click(function() {
//   console.log("fastfoward")
// });
// var moves;
// moves = ['#start'];
$("#play_pause").click(function() {
  $('#start').removeClass('start')
  $('#white1').addClass('white1')
});
$("#white_1").click(function() {
  $('#start').addClass('start')
  $('#white1').removeClass('white1')
});
