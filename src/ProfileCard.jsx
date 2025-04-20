import { skills } from "./data";
import Skill from "./Skill";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="container">
        <img src="/images/profile-photo.jpg" alt="Maximo Brito Photo" />
        <div className="info">
          <h1>Maximo Brito</h1>
          <p>
            Full-stack web developer and dreamer at Heaven's Kingdom. When not
            coding or learing to code, I like to seek God's wisdom and Word, to
            read, and sometimes exercise.
          </p>
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <Skill key={skill.skill} data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
