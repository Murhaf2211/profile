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

  
})
