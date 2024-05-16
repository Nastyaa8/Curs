// Отправка заявки 
document.addEventListener('DOMContentLoaded', function () {

    $(document).ready(function() {
        $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
            $.ajax({
                type: "POST",
                url: "DB.php",
                data: $(this).serialize()
            }).done(function() {
                $('.form').fadeIn();
                $(this).find('input').val('');
                $('#form').trigger('reset');
            });
            return false;
        });
    });
})