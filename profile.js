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

  $('#education').click( ev =>{
    ev.preventDefault();
     let newSection = document.createElement('SECTION');
     let closeSpan = document.createElement('SPAN');
     let newH1 = document.createElement('H1');
     let pic = document.createElement('IMG');
     pic.src = 'pictures/ScannedImage-7.jpg';
     newSection.classList.add('onthefly');
     closeSpan.innerText = 'X';
     newH1.innerText ='Education';

    newSection.append( closeSpan, newH1, pic);
    $('body').append(newSection);

    $('.onthefly span').click(function (ev){
    $(this).parent().remove();

   })
  })
  $('#projects').click( ev =>{
    ev.preventDefault();
     let newSection = document.createElement('SECTION');
     let closeSpan = document.createElement('SPAN');
     let newH1 = document.createElement('H1');
     let pic = document.createElement('IMG');
     pic.src = 'pictures/code.jpg';
     newSection.classList.add('onthefly');
     closeSpan.innerText = 'X';
     newH1.innerText ='Some Codes';

    newSection.append( closeSpan, newH1, pic);
    $('body').append(newSection);

    $('.onthefly span').click(function (ev){
    $(this).parent().remove();

   })
  })
  $('#certifi').click( ev =>{
    ev.preventDefault();
     let newSection = document.createElement('SECTION');
     let closeSpan = document.createElement('SPAN');
     let newH1 = document.createElement('H1');
     let pic = document.createElement('IMG');
     pic.src = 'pictures/ScannedImage-4.jpg';
     newSection.classList.add('onthefly');
     closeSpan.innerText = 'X';
     newH1.innerText ='Some Certificates';

    newSection.append( closeSpan, newH1, pic);
    $('body').append(newSection);

    $('.onthefly span').click(function (ev){
    $(this).parent().remove();

   })
  })
  $('#programes').click( ev =>{
    ev.preventDefault();
     let newSection = document.createElement('SECTION');
     let closeSpan = document.createElement('SPAN');
     let newH1 = document.createElement('H1');
     let pic = document.createElement('IMG');
     pic.src = 'pictures/top.jpg';
     newSection.classList.add('onthefly');
     closeSpan.innerText = 'X';
     newH1.innerText ='Programming Languages';

    newSection.append( closeSpan, newH1, pic);
    $('body').append(newSection);

    $('.onthefly span').click(function (ev){
    $(this).parent().remove();

   })
  })
  $('#lang_special').click( ev =>{
    ev.preventDefault();
     let newSection = document.createElement('SECTION');
     let closeSpan = document.createElement('SPAN');
     let newH1 = document.createElement('H1');
     let pic = document.createElement('IMG');
     pic.src = 'pictures/skills.jpg';
     newSection.classList.add('onthefly');
     closeSpan.innerText = 'X';
     newH1.innerText ='More Skills';

    newSection.append( closeSpan, newH1, pic);
    $('body').append(newSection);

    $('.onthefly span').click(function (ev){
    $(this).parent().remove();

   })
  })
})
