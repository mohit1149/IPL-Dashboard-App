// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchFullDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchFullDetails

  return (
    <>
      <p className="medium-size latest-paragraph">Latest Matches</p>
      <div className="latest-match-container">
        <div className="left-container">
          <p className="big-size">{competingTeam}</p>
          <p className="medium-size">{date}</p>
          <p className="small-size">{venue}</p>
          <p className="small-size">{result}</p>
        </div>
        <div className="image-container">
          <img
            className="logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="right-container">
          <p className="medium-size">First Innings</p>
          <p className="small-size">{firstInnings}</p>
          <p className="medium-size">Second Innings</p>
          <p className="small-size">{secondInnings}</p>
          <p className="medium-size">Man Of The Match</p>
          <p className="small-size">{manOfTheMatch}</p>
          <p className="medium-size">Umpires</p>
          <p className="small-size">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
