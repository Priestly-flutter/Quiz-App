console.log('hello Priestly I work')
const url = window.location.href

$.ajax({
    type: 'GET',
    url: '${data}',

    success:function(response){
        console.log(response)
        console.log('hi')
    },
    error:function(error){
        console.log(error)
    }
})