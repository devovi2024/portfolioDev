
export default function SkillCard({skill}) {
  return (
    <div>
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
      <h1>{skill.title}</h1>
    </div>
  )
}
