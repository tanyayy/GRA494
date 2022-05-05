document.querySelector('.five__video-thumbnail').onclick = () => {
    document.querySelector('.five__video-popup-container').style.display = 'block';
    document.querySelector('.five__video-popup-container video').src = vid.getAttribute('src');
}

document.querySelector('.five__video-popup-container span').onclick = () => {
	document.querySelector('.five__video-popup-container').style.display = 'none';
}

document.querySelector('.five__video-thumbnail-2').onclick = () => {
    document.querySelector('.five__video-popup-container-2').style.display = 'block';
    document.querySelector('.five__video-popup-container-2 video').src = vid.getAttribute('src');
}

document.querySelector('.five__video-popup-container-2 span').onclick = () => {
	document.querySelector('.five__video-popup-container-2').style.display = 'none';
}

document.querySelector('.five__video-thumbnail-3').onclick = () => {
    document.querySelector('.five__video-popup-container-3').style.display = 'block';
    document.querySelector('.five__video-popup-container-3 video').src = vid.getAttribute('src');
}

document.querySelector('.five__video-popup-container-3 span').onclick = () => {
	document.querySelector('.five__video-popup-container-3').style.display = 'none';
}


window.onload = displayImage;
   var imagesArray = new Array("img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg");


  function displayImage(){
      var randomNum = Math.floor(Math.random() * imagesArray.length);
      document.getElementById("random").src = imagesArray[randomNum]

  }

  document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#submit');
  const closeBtn4 = document.querySelector('.close');
  const contactformoverlay = document.querySelector('.contactform-overlay');

  submit.addEventListener('click', () => {
    contactformoverlay.style.display = 'block';
  });

  closeBtn4.addEventListener('click', () => {
    contactformoverlay.style.display = 'none';
  });

});


  $("#myForm").submit(function(e) {
    e.preventDefault();
});



function displayText(){
  // Selecting the input element and get its value --- FIRST NAME
  var text = document.getElementById("fname").value;

  // Displaying the value
  var output = document.getElementById("first-name");
  output.innerHTML = text;



  // Selecting the input element and get its value --- LAST NAME
  var text2 = document.getElementById("lname").value;

  // Displaying the value
  var output2 = document.getElementById("last-name");
  output2.innerHTML = text2;



  // Selecting the input element and get its value --- MESSAGE
  var text3 = document.getElementById("message").value;

  // Displaying the value
  var output3 = document.getElementById("message-content");
  output3.innerHTML = text3;


}
