console.log('hello Priestly I work')
const url = window.location.href

const quizBox = document.getElementById('quiz-box')

let data

$.ajax({
    type: 'GET',
    url: '${url}data',

    success:function(response){
        console.log(response)
          data = response.data
        //grabbing element from data base list in a lsit format containing both key and values
        data.forEach(el => {
            for(const [question,answers] of Object.entries(el)){
                console.log(question)
                console.log(answers)
            }
        });
        
    },
    error:function(error){
        console.log(error)
    }
})
