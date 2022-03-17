<?php
  mb_internal_encoding("utf8");

  $pdo = new PDO("mysql:dbname=lesson01;host=localhost;", "root", "");

  $pdo ->exec("insert into contactform(name,mali,age,comment)
  values('".$_POST['name']."','".$_POST['mail']."','".$_POST['age']."','".$_POST['comment']."');");

  ?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お問合せフォームを作る</title>
  <link rel="stylesheet" href="style2.css">
</head>
<body>
  <h1>お問合せフォーム</h1>

  <div class="confirm">
    <p>お問合せありがとうございました。</p><br>
    3営業以内に担当者よりご連絡差し上げます。
  </div>

</body>
</html>
