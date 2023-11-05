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
                quizBox.innerHTML +='
                        <div class="mb-2">
                    //injectiing the question in to the page.
                            <b>${question}</b>
                        </div>
                    '
                     answers.forEach(answer=>{
                        quizBox.innerHTML +='
                            <div>
                                <input type="radio" class="ans" id="${question}-$asnwer}" name="${question} value="${answer}">
                            <lable for="${question}">${answer}
                            </div>
                        '
                    })
                }
        });
        
    },
    error:function(error){
        console.log(error)
    }
})
