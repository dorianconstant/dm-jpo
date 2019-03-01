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

    function validDateInsc(date){
        var dayInWeek = date.getDay();
        if(dayInWeek == 0 || dayInWeek == 6)
        return [false];
        return [true];
    }

    var minDate = new Date(2019, 03, 01);
    var maxDate = new Date(2019, 05, 01);

    $.datepicker.setDefaults($.datepicker.regional['fr']);
    $('#datepicker').datepicker({
        beforeShowDay: validDateInsc,
        minDate : minDate,
        maxDate : maxDate
    });
});