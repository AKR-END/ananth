function toggleMode() {
    document.body.classList.toggle('dark-mode');
}



var words = ['WebDev', 'Cricket', 'Public Speaking','Volleyball' ,'Weight lifiting']; 
var currentIndex = 0;
var t = setInterval(function() { 
  $('#changing').html(words[currentIndex]);
  currentIndex = (currentIndex + 1) % words.length;
}, 2000);