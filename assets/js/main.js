document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('pseudo').addEventListener('blur', function(){
        let pseudo = document.insc.pseudo.value;
        if (validPseudo(pseudo) == false){
            document.getElementById('mess_pseudo').textContent = 'Erreur de pseudo, seulement lettres et chiffres';
        }
    });

    document.getElementById('pseudo').addEventListener('focus', function(){
        document.getElementById('mess_pseudo').textContent = '';
        });
    });