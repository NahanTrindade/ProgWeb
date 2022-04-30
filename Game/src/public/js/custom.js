function apagarCurso(id, csrf){
    $.ajax({
        url: `/curso/remove/${id}`,
        type: 'DELETE',
        headers: {
            'X-CSRF-TOKEN': csrf
        }
    }).done(function(msg){
        console.log(msg);
        window.location.href = '/curso'
    }).fail(function (msg){
        console.log(msg);
    })
} 

function printar(id){
    console.log(id)
}

