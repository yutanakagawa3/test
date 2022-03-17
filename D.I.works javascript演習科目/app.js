document.write("ココカラ----<br>")
for(let i = 0; i < 5; i++) {      //この書き方が人間的にもプログラミング的にもベスト
  document.write("★");            //プログラミングは0から数え始めるから
}

document.write("<br>-----ココマデ<br>");
document.write("<br>");



document.write("ココカラ----<br>")
for(let i = 0; i < 2; i++) {
  for(let a = 0; a < 3; a++) {
    document.write("★");
  }
  document.write("<br>");
}
document.write("-----ココマデ<br>");
document.write("<br>");



document.write("ココカラ----<br>")
for(let i = 0; i < 2; i++) {
  for(let a = 0; a < 5; a++) {
    document.write("☆");
  }
  document.write("<br>")
}
document.write("-----ココマデ<br>");
document.write("<br>");



document.write("ココカラ----<br>")
for(let i = 0; i < 3; i++) {
  for(let a = 0; a < 5; a++) {
    document.write("★");
  }
  document.write("<br>");
}
document.write("-----ココマデ<br>");
document.write("<br>");




document.write("ココカラ----<br>")
for(let i = 0; i < 4; i++) {
  for(let a = 0; a < 3; a++) {
    document.write("★");
  }
  document.write("<br>");
}
document.write("-----ココマデ<br>");
document.write("<br>");




document.write("ココカラ----<br>")
for(let i = 0; i < 3; i++) {
  for(let a = 0; a < 3; a++) {
    if(a % 2 == 0) {
      document.write("★");
    }else {
      document.write("☆");
    }
  }
  document.write("<br>");
}
document.write("-----ココマデ<br>");
document.write("<br>");





document.write("ココカラ----<br>")
for(let i = 0; i < 4; i++) {
  for(let a = 0; a < 5; a++) {
    if(a % 2 == 0){
      document.write("★");
    }else {
      document.write("☆");
    }
  }
  document.write("<br>")
}
document.write("-----ココマデ<br>");
document.write("<br>");




document.write("ココカラ----<br>")
for(let i = 0; i < 5; i++) {
  for(let a = 0; a <= i; a++) {
    document.write("★");
  }
  document.write("<br>")
}

document.write("-----ココマデ<br>");



document.write("<br>");
document.write("<br>");
document.write("<br>");



function menseki(hannkei) {
  return hannkei * hannkei * 3.14;
}

document.write("半径5センチの円の面積は" + menseki(5) + "cmです");  //処理はあってるがこれだとブラウザに表示された時になんの数字か分からないから
document.write("<br>");     //しっかり誰が見てもわかるように表示されるようにする
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));


document.write("<br>");
document.write("<br>");
document.write("<br>");



function total(otona, kodomo) {
  return (500 * otona) + (200 * kodomo);
}

document.write("Aグループの合計金額" + total(2,4) + "です。");
document.write("<br>");

document.write("Bグループの合計金額" + total(1,5) + "です。");
document.write("<br>");

document.write("Cグループの合計金額" + total(3,7) + "です。");
