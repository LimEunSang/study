var Links = {
  // 메소드 선언 및 초기화 방법
  setColor : function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  setColor : function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }, // 메서드 사이에 ','를 붙인다!

  setBackgroudColor : function(color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {
  // var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgroudColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroudColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
