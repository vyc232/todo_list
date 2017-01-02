//Scripts for To-Do List in jQuery

$(function() {    
    var $listInput = $('#listInput');
    $('#inputItem').hide();
    $('#add').on('click', function(e) {
        e.preventDefault();
        $('#inputItem').show();  
        $listInput.focus();
    });
    
    $('#inputItem').on('focusout', function() {
        $('#inputItem').hide();
    });
    
    $listInput.on('keydown', function(e) {        
        if(e.keyCode == 13){
            var text = $('#listInput').val();
            $('#list').append('<li>' + text + '</li>');
            $('#listInput').val('');
            updateCount();
        }
    });
        
    function updateCount() {
        var count = $('li').length - 1;
        if(count == 1)
            $('#thing').text("Thing");
        else
            $('#thing').text("Things");
        $('#counter').text(count);
    }    
});