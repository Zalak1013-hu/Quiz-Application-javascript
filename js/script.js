const jsQuiz = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: "var"
  },
  {
    question: "Which method is used to print output in console?",
    options: ["print()", "log()", "console.log()", "write()"],
    answer: "console.log()"
  },
  {
    question: "Which data type is NOT primitive?",
    options: ["String", "Number", "Object", "Boolean"],
    answer: "Object"
  },
  {
    question: "What will typeof null return?",
    options: ["null", "object", "undefined", "number"],
    answer: "object"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//"
  },
  {
    question: "Which function converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which method is used to add element at end of array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which method removes last element of array?",
    options: ["push()", "pop()", "shift()", "slice()"],
    answer: "pop()"
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "===", "!=", "="],
    answer: "==="
  },
  {
    question: "What is closure in JavaScript?",
    options: [
      "Function inside function",
      "Access outer scope variables",
      "Block scope",
      "Loop function"
    ],
    answer: "Access outer scope variables"
  },
  {
    question: "Which keyword is used for function?",
    options: ["func", "function", "def", "fn"],
    answer: "function"
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while"
  },
  {
    question: "Which method is used to convert object to JSON?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.make()"],
    answer: "JSON.stringify()"
  },
  {
    question: "What is DOM?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Digital Object Model",
      "Display Object Model"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Which event occurs when user clicks?",
    options: ["onhover", "onclick", "onchange", "onsubmit"],
    answer: "onclick"
  },
  {
    question: "Which keyword is used for constant?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "Which array method creates new array?",
    options: ["map()", "forEach()", "push()", "pop()"],
    answer: "map()"
  },
  {
    question: "Which keyword refers to current object?",
    options: ["self", "this", "that", "object"],
    answer: "this"
  },
  {
    question: "Which function delays execution?",
    options: ["setTimeout()", "delay()", "wait()", "pause()"],
    answer: "setTimeout()"
  },
  {
    question: "Which function repeats execution?",
    options: ["setInterval()", "repeat()", "loop()", "setLoop()"],
    answer: "setInterval()"
  },
  {
    question: "Which method is used to find element?",
    options: ["find()", "filter()", "map()", "reduce()"],
    answer: "find()"
  },
  {
    question: "Which method is used to filter array?",
    options: ["map()", "filter()", "reduce()", "find()"],
    answer: "filter()"
  },
  {
    question: "Which keyword is block scoped?",
    options: ["var", "let", "function", "global"],
    answer: "let"
  },
  {
    question: "Which symbol is used for arrow function?",
    options: ["=>", "->", "==>", "::"],
    answer: "=>"
  },
  {
    question: "What is NaN?",
    options: ["Not a Number", "Null and Number", "New Array Number", "None"],
    answer: "Not a Number"
  },
  {
    question: "Which method joins array into string?",
    options: ["join()", "concat()", "slice()", "splice()"],
    answer: "join()"
  },
  {
    question: "Which method merges arrays?",
    options: ["concat()", "join()", "push()", "merge()"],
    answer: "concat()"
  },
  {
    question: "Which method removes first element?",
    options: ["shift()", "pop()", "slice()", "remove()"],
    answer: "shift()"
  },
  {
    question: "Which method adds element at start?",
    options: ["unshift()", "push()", "add()", "insert()"],
    answer: "unshift()"
  },
  {
    question: "Which keyword is used for async function?",
    options: ["async", "await", "promise", "callback"],
    answer: "async"
  }
];


// start section
const startSection = document.querySelector('#start-section');

// quize section
const quiz = document.querySelector('#quiz');

//quiz options
const quizQus = document.querySelector('.quiz-qus');
const quizOptions = document.querySelector('.quiz-options');
let currentQus = 0;
let sec = document.querySelector('#sec');
let min = document.querySelector('#min');

let secCount = 59;
let minCount = 29;

const handleTimer = ()=>{
  min.textContent = `${minCount}`.length > 1 ? minCount : `0${minCount}`
  sec.textContent = `${secCount}`.length > 1 ? secCount : `0${secCount}`

  if(secCount == 0){
    secCount = 60;
    minCount--;
  }
  secCount--;

}

const handleStartQuiz = () => {
  startSection.classList.add('d-none');
  quiz.classList.remove('d-none');
  handleNextQus();

  let intervalId = setInterval(()=>{
    if(minCount == 0 && secCount == 0){
      clearInterval(intervalId);
      handleSubmitQuiz();
    }
    handleTimer();
  },1000)
}

const handleNextQus = () => {

  // show question 
  quizQus.textContent = jsQuiz[currentQus].question
  
  // show options
  let optionList = jsQuiz[currentQus].options;

  quizOptions.innerHTML = ''
  optionList.forEach((option)=>{
    let li = document.createElement('li')

    li.innerHTML = `
      <input type="radio" data-index=${currentQus} name="ans" value=${option} />
      <span class="">${option}</span>
    `
    quizOptions.append(li);
  })

  // add user ans in to object
  const optionButtons = document.querySelectorAll('.quiz-options input[type="radio"]')

  optionButtons.forEach((input)=>{
    input.addEventListener('change',function(e){
      
      let index = this.dataset.index
      jsQuiz[index].yourAns = this.value;
    })
  })

  if(currentQus == jsQuiz.length - 1)
  {
    handleSubmitQuiz();
  }

  if(currentQus < jsQuiz.length - 1)
  {
    currentQus++;
  }
}

const handleSubmitQuiz = ()=>{
    
    let isSubmit = confirm("Submit your test??");
    
    if(isSubmit){
      let score = 0;
      
      jsQuiz.forEach((value,index)=>{
        if(value.answer == value.yourAns){
          score++;
        }
      })
      
      alert(`Your score is ${score} / ${jsQuiz.length}`);
    }
}