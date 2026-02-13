import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import EndScreen from "./components/EndScreen";
import "./App.css";

const questions = [
  {
    id: 1,
    question:
      "What color will you get if you mix both of our favorite colors together?",
    choices: ["Navy blue", "Smoky violet", "Baby blue", "Lavender"],
    correctAnswer: 3,
  },
  {
    id: 2,
    question: "What did we not see on our COEX aquarium date back in 2023?",
    choices: ["Lobster", "Prairie dog", "Seahorse", "Axolotl"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question:
      "What was the first thing we see after waiting in line for our Disney's 100th Anniversary date?",
    choices: [
      "A box of jewellery",
      "Floating lanterns",
      "A desk and a gramophone",
      "A well",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Which one of these actions have we done together most recently?",
    choices: [
      "Try to sync/unsyc our footsteps",
      "Consume pasta",
      "Fart at each other",
      "Visit anime shops",
    ],
    correctAnswer: 3,
  },
  {
    id: 5,
    question:
      "On January 8th, 2026, you asked me to buy you a dosirak from CU. Which of these was NOT in the dosirak?",
    choices: ["Mini dumpling", "Egg roll", "Jeyuk", "Kimchi"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question:
      "On January 1st, 2026, I made you dinner as per your request. What did I cook for you?",
    choices: [
      "Aglio olio with a piece of salmon",
      "Aglio olio with a piece and a half of salmon",
      "Rice and egg",
      "Indomie and egg",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question:
      "What resembles our outfit the most on the DISA halloween celebration last year?",
    choices: [
      "A construction worker",
      "A maid",
      "A white-collar worker",
      "A fairy",
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question:
      "Which one of these was the earliest thing you taught me about taking a picture?",
    choices: [
      "Using the guiding grid lines",
      "Making sure there's enough head space",
      "Adjusting the angle to be higher",
      "Capturing the background",
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question:
      "Which one of the following items has either of us never given to the other?",
    choices: ["A seashell", "A crepe cake", "A fan", "A sunscreen"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What do we not have an identical pair of?",
    choices: ["White otter", "Penguin", "Brown otter", "Totoro"],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "What was the first K hip-hop/rap song I learned from you?",
    choices: ["Goodbye", "Summer", "Good Night", "Baby"],
    correctAnswer: 0,
  },
  {
    id: 12,
    question:
      "How many plates and bowls did we have in total on our IKEA date?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: 2,
  },
  {
    id: 13,
    question:
      "What was the flavor of your and my ice cream that we had in SJF respectively?",
    choices: [
      "Chocolate & chocolate",
      "Chocolate & matcha",
      "Chocolate & vanilla",
      "Chocolate & salted caramel",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question:
      "How many potatoes did we use to make our first batch of mashed potatoes?",
    choices: ["One", "One and a half", "Two", "Two and a half"],
    correctAnswer: 2,
  },
  {
    id: 15,
    question: "How many otters are there in our matching otter poster?",
    choices: ["One", "Two", "Three", "Four"],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "What is the color of our love lock in Namsan Tower?",
    choices: ["Red", "White", "Pink", "Blue"],
    correctAnswer: 3,
  },
  {
    id: 17,
    question:
      "Which of these actions did we not do in your short video featuring the song 'Someone to Stay'?",
    choices: ["Run together", "Hold hands", "Hug", "Pinky promise"],
    correctAnswer: 0,
  },
  {
    id: 18,
    question:
      "How many flavors of dumpling were there in our Din Tai Fung date?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: "What did we not see this year?",
    choices: [
      "An otter sitting on top of your head",
      "A flying salt bread",
      "A giant Choonsik",
      "A 27-cube ice cream cake",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question:
      "Which of the following did you not mention in the list of things you want for your future wedding?",
    choices: [
      "Afterparty",
      "Minimalist invitation card",
      "Wedding games",
      "Slow dance",
    ],
    correctAnswer: 1,
  },
];

function App() {
  const [screen, setScreen] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (index, correctAnswer) => {
    setSelectedAnswer(index);

    // * Check answer
    if (index === correctAnswer) setScore((prev) => prev + 1);

    // * Check if the user has reached the end of the quiz
    if (currentQuestionIndex + 1 < questions.length) {
      // * 1s timeout
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      }, 1500);
    } else {
      // * Render end screen
      setTimeout(() => {
        setScreen("end");
      }, 1000);
    }
  };

  return (
    <>
      {screen === "start" && <StartScreen onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && (
        <Question
          data={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
        />
      )}
      {screen === "end" && <EndScreen score={score} total={questions.length} />}
    </>
  );
}

export default App;
