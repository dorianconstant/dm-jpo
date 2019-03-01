document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('pseudo').addEventListener('blur', function(e){
        let pseudo = document.insc.pseudo.value;
        if (validPseudo(pseudo) == true){
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('mess_pseudo').classList.remove('d-none');
            e.stopPropagation();
        }
    });
});

jQuery(document).ready(function($){

    $.datepicker.setDefaults($.datepicker.regional['fr']);
    $('#datepicker').datepicker();
});