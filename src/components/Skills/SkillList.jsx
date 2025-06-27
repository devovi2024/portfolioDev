import skillData from '../../assets/skillData.json'
import SkillCard from './SkillCard'
export default function SkillList() {
  return (
    <div>
        {
            skillData.map((skill) => (
                <SkillCard key={skill.id} skill={skill}/>
            ))
        }
      
    </div>
  )
}
