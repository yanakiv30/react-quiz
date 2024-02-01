export default function FinishScreen({ points, maxPossiblePoints, highscore ,dispatch}) {
  const persentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (persentage >= 100) emoji = "🥇";
  else if(persentage>=75 && persentage<100) emoji="😃";
  else if(persentage>=50 && persentage<75) emoji="👍";
  else if(persentage>0 && persentage<50) emoji="👎";
  else emoji = "👎👎👎";
  return (
    <>    
    <p className="result">
      <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
      {maxPossiblePoints}({Math.ceil(persentage)}%)
    </p>
    <p className="highscore">(Highscore {highscore} points)</p>
    <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
