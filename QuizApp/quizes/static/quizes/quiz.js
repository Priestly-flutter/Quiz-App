console.log('hello Priestly I work')
const url = window.location.href

$.ajax({
    type: 'GET',
    url: '${url}data',

    success:function(response){
        console.log(response)
        
    },
    error:function(error){
        console.log(error)
    }
})
