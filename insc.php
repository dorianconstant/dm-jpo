<?php

  $pseudo = $_POST['pseudo'];

  list($jour, $mois, $annee)=explode('/', $_POST['date_user']);

  $date_user = $annee . '-' . $mois . '-' . $jour ;

  $sql = $bdd -> prepare('INSERT INTO user(pseudo, date_user) VALUES (:pseudo, :date_user)');

  $sql = bindValue(':pseudo', $pseudo);

  $sql = bindValue(':date_user', $date_user);

  $sql->execute();




?>