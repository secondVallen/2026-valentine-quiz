export default function Question({ data, onAnswer, selectedAnswer }) {
  function getOptionClass(index) {
    if (selectedAnswer === null) return "option";
    if (index === data.correctAnswer) return "option correct";
    if (index === selectedAnswer) return "option wrong";

    return "option";
  }

  return (
    <div className="container">
      <h1>{data.question}</h1>
      <div className="options">
        {data.choices.map((choice, index) => (
          <div key={index}>
            <button
              className={getOptionClass(index)}
              onClick={() => onAnswer(index, data.correctAnswer)}
            >
              {choice}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
