$(document).ready(function () {
    $('button#send').on('click', function (e) {
        e.preventDefault();
        alert("Thank you. We will call you soon to confirm your order.");
        return false;
    });
});
