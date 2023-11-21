// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true, latestMatch: [], matchCard: []}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
    }
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const updatedMatchCard = {
      matchCardDetails: data.recent_matches,
    }
    this.setState({
      teamMatchesData: updatedData,
      isLoading: false,
      latestMatch: latestMatchDetails,
      matchCard: updatedMatchCard,
    })
  }

  render() {
    const {teamMatchesData, isLoading, latestMatch, matchCard} = this.state
    const {teamBannerUrl} = teamMatchesData

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              className="banner-image"
              src={teamBannerUrl}
              alt="team banner"
            />
            <LatestMatch
              latestMatchFullDetails={latestMatch}
              key={latestMatch.id}
            />
            <ul className="card-container">
              {matchCard.matchCardDetails.map(eachCard => (
                <MatchCard
                  key={eachCard.id}
                  competingTeam={eachCard.competing_team}
                  competingTeamLogo={eachCard.competing_team_logo}
                  secondInnings={eachCard.second_innings}
                  matchStatus={eachCard.match_status}
                  result={eachCard.result}
                  id={eachCard.id}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
