function apagarCurso(id, csrf){
    $.ajax({
        url: `/curso/remove/${id}`,
        type: 'DELETE',
        data: {
            csrf: csrf
        }
    }).done(function(msg){
        console.log(msg);
        window.location.href = '/curso'
    }).fail(function (msg){
        console.log(msg);
    })
} 

function salvarJogo(csrf, userId, pontuacao){
    $.ajax({
        url: `/save`,
        type: 'POST',
        headers : {
            _csrf: csrf
        },
        data : {
            userId: userId,
            pontuacao: pontuacao,
        }
    }).done(function(msg){
        console.log(msg);
    }).fail(function (msg){
        console.log(msg);
    })
}

