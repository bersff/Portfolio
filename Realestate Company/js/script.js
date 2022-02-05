$(document).ready(function(){
  $('.main_body_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 800,
    fadeSpeed: 800,
  });
});

$(function(){
  $('.tab-panels .tabs li').on('click', function(){

    var $panel = $(this).closest('.tab-panels');
    //event listener listening for clicks on the tabs panels
    
    //figure out which panel to show

    $panel.find(' .tabs li.active').removeClass('active');

    $(this).addClass('active');

    var clickedPanel = $(this).attr('data-panel-name');

    //hide current panel
    $panel.find('.panel.active').slideUp(300, nextPanel);

    //show new panel
    function nextPanel(){
      $(this).removeClass('active');

      $('#'+clickedPanel).slideDown(300, function(){
        $(this).addClass('active');
      });
    }
  })
});


/*function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}*/