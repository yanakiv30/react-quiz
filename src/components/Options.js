export default function Options({ question, dispatch, answer }) {
    const hasAnswered = answer!==null
  return (
    <div className="options">
      {question.options.map((option, mapIndex) => (
        <button
          className={`btn btn-option ${mapIndex === answer ? "answer" : ""} ${hasAnswered ?
            (mapIndex === question.correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={hasAnswered} 
          onClick={() => dispatch({ type: "newAnswer", payload: mapIndex })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
