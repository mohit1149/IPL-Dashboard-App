// Write your code here
import './index.css'

const MatchCard = props => {
  const {
    competingTeam,
    competingTeamLogo,
    secondInnings,
    matchStatus,
    result,
    id,
  } = props

  return (
    <li className="list-items" key={id}>
      <img
        className="logo logo-size"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="big-size first-innings">{competingTeam}</p>
      <p className="medium-size first-innings">{result}</p>
      {matchStatus === 'Lost' ? (
        <p className="medium-size red-color">{matchStatus}</p>
      ) : (
        <p className="medium-size green-color">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
