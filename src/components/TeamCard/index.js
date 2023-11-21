// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  return (
    <>
      <ul className="unOrder-list">
        {teamsData.map(team => (
          <li key={team.id} className="list-name">
            <Link to={`/team-matches/${team.id}`} className="list-item">
              <img
                className="teams-image"
                src={team.teamImageUrl}
                alt={team.name}
              />
              <p className="teams-name">{team.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TeamCard
