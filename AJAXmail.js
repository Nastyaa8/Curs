// Отправка заявки 
document.addEventListener('DOMContentLoaded', function () {

    $(document).ready(function() {
        $('#myForm').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {
                $('.myForm').fadeIn();
                $(this).find('input').val('');
                $('#myForm').trigger('reset');
            });
            return false;
        });
    });
})