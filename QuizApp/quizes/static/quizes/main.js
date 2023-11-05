console.log('hello Priestly')



const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startBtn = document.getElementById('start-button')
const url = window.location.href

modalBtns.forEach(modalBtn => modalBtn.addEventListener('click', () => {
    const pk = modalBtn.getAttribute('data-pk');
    const name = modalBtn.getAttribute('data-quiz');
    const numQuestions = modalBtn.getAttribute('data-questions');
    const difficulty = modalBtn.getAttribute('data-difficulty');
    const time = modalBtn.getAttribute('data-time');
    const scoreToPass = modalBtn.getAttribute('data-score');

    ///displays and inner html 
    modalBody.innerHTML = `
    <p>Are you sure you want to start the quiz "${name}"?</p>
    <div class="text-muted">
        <ul>
            <li>Difficulty: ${difficulty}</li>
            <li>Number of question: ${numQuestions}</li>
            <li>Score: ${scoreToPass}%</li>
            <li>Time: ${time} min</li>
            
        </ul>
    </div>
    `;

    startBtn.addEventListener('click',()=>{
        window.location.href = url + pk
    })
}));
