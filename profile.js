
$(document).ready(ev =>{

  let counter = 0;
  let start =$('#startButton');
  let mainPage =$('#mainPage');

  mainPage.hide();
  start.click(ev =>{
    counter++;
    if (counter === 1) {
      mainPage.show();
      $("#startButton").html("Hide More Info");
     
      $("form").submit(function(e) {              
        var error = "";
        if ($("#email").val() == "") {    
            error += "The email field is required.<br>"   
        }
        if ($("#name").val() == "") {  
            error += "The Name field is required.<br>"   
        }
        if ($("#message").val() == "") { 
            error += "The Comment field is required.<br>"   
        }
        if (error != "") { 
          $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
          return false;  
        } else {  
          return true; 
        }
      })

     }else if (counter === 2) {
     mainPage.hide();
     $("#startButton").html("Show More Info");
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
  
  $('#html').click( ev =>{
    popup('htmlCert','HTML Certificate')
  })
  $('#css').click( ev =>{
    popup('cssCert','CSS Certificate')
  })
  $('#js').click( ev =>{
    popup('jsCert','JavaScript Certificate')
  })
  $('#jq').click( ev =>{
    popup('jqCert','jQuery Certificate')
  })
  $('#mysql').click( ev =>{
    popup('msqlCert','MYSQL Certificate')
  })
  $('#php').click( ev =>{
    popup('phpCert','PHP Certificate')
  })
  $('#dci').click( ev =>{
    popup('DCICert','Ausbildung Certificate')
  })
  $('#ipma').click( ev =>{
    popup('ipmaCert','IPMA Certificate')
  })
  $('#a').click( ev =>{
   popup('aCert','A+ Certificate')
  })
  $('#network').click( ev =>{
   popup('networkCert','Network+ Certificate')
  })
  $('#mcdst').click( ev =>{
   popup('mcdstCert','MCDST Certificate')
  })
  $('#win').click( ev =>{
    popup('winCert','Windows Certificate')
  })
  $('#exel').click( ev =>{
    popup('exelCert', 'Exel Certificate')
  })
  $('#access').click( ev =>{
    popup('accessCert','Excel Certificate')
  })
})
