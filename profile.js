$(document).ready(ev =>{
  let nextB =$('#nextButt');
  let backB =$('#backButt');;
  let paragraph1 =$('.workExper_paragraph:first-of-type');
  let paragraph2 =$('.workExper_paragraph:nth-of-type(2)');
  let paragraph3 =$('.workExper_paragraph:last-of-type');
  let counter = 0;
  nextB.click(ev => {
    counter++;
    $('.workExper_paragraph').hide();
    if (counter === 1) {
    paragraph2.show();
  }else if (counter === 2) {
    paragraph3.show();
  }else{
    paragraph1.show();
    counter = 0;
  }
  })
  backB.click(ev => {
  $('.workExper_paragraph').hide();
  paragraph1.show();
   counter = 0;
  })

let popup = function(img ,text){
  let newSection = document.createElement('SECTION');
  let closeSpan = document.createElement('SPAN');
  let newH1 = document.createElement('H1');
  let pic = document.createElement('IMG');
  pic.src = `pictures/${img}.jpg`;
  newSection.classList.add('onthefly');
  closeSpan.innerText = 'X';
  newH1.innerText =`${text}`;
 newSection.append( closeSpan, newH1, pic);
 $('body').append(newSection);
 $('.onthefly span').click(function (ev){
 $(this).parent().remove();
})
}

  $('#education').click( ev =>{
    ev.preventDefault();
    popup('ScannedImage-7','Education')
  })
  $('#projects').click( ev =>{
    ev.preventDefault();
    popup('code','Some Codes')
  })
  $('#certifi').click( ev =>{
    ev.preventDefault();
    popup('ScannedImage-4','Some Certificates')
  })
  $('#programes').click( ev =>{
    ev.preventDefault();
    popup('top','Programming Languages')
  })
  $('#lang_special').click( ev =>{
    ev.preventDefault();
   popup('skills','More Skills')
  })
})
