
function chooseIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}
console.log('chooseIndex: ' + chooseIndex([0,1,2]));
//https://bootsnipp.com/snippets/featured/dynamic-form-fields-add-amp-remove-bs3
$(function () {
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();
        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);
        
        newEntry.find('input').val('');
        newEntry.find('input').attr('name', 'other_amount');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function (e) {
        $(this).parents('.entry:first').remove();

        e.preventDefault();
        return false;
    });
});