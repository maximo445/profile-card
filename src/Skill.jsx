function Skill({ data }) {
  const bgColor = { background: data?.color };
  return (
    <div className="skill" style={bgColor}>
      <p>
        {data.skill}{" "}
        {data.level === "beginner"
          ? "👶"
          : data.level === "intermmidiate"
          ? "👍"
          : "💪🏽"}
      </p>
    </div>
  );
}

export default Skill;
