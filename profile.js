
$(document).ready(ev =>{
  let paragraph1 =$('.workExper_paragraph:first-of-type');
  let paragraph2 =$('.workExper_paragraph:nth-of-type(2)');
  let paragraph3 =$('.workExper_paragraph:last-of-type');
  let counter = 0;
  let start =$('#startButton');
  let mainPage =$('#mainPage');
  let startPage =$('#startPage');

  mainPage.hide();

  start.click(ev =>{
    counter++;
    if (counter === 1) {
     mainPage.show();
     }else if (counter === 2) {
     mainPage.hide();
     counter = 0;
   }
  })

 let popup = function(img , text){
  let newSection = document.createElement('SECTION');
  let closeSpan = document.createElement('SPAN');
  let newH1 = document.createElement('H1');
  let pic = document.createElement('IMG');
  pic.src = `pictures/${img}.jpg`;
  newSection.classList.add('onthefly');
  closeSpan.innerText = 'X';
  newH1.innerText =text;
 newSection.append( closeSpan, newH1, pic);
 $('body').append(newSection);
 $('.onthefly span').click(function (ev){
 $(this).parent().remove();
})
}
  $('#a').click( ev =>{
  popup('a','A+ Certificate')
  })
  $('#network').click( ev =>{
    popup('ScannedImage-4','Network+ Certificate')
  })
  $('#mcdst').click( ev =>{
    popup('ScannedImage-6', 'MCDST Certificate')
  })
  $('#ipma').click( ev =>{
    popup('ScannedImage-7','IPMA')
  })
  $('#b2').click( ev =>{
   popup('b2','B2 Certificate')
  })
  $('#biq').click( ev =>{
   popup('biq','BIQ Certificate')
  })
  $('#dci').click( ev =>{
   popup('dci','DCI Certificate')
  })
  $('#drk').click( ev =>{
   popup('drk','DRK Certificate')
  })
  $('#plc').click( ev =>{
   popup('plc','Ausbildung Certificate')
  })
})
