import { Trophy, Tv, Flag, Flame, CalendarDays, Gauge, Users, Rocket } from 'lucide-react'
import { leagueInfo, currentRace, weeklyWinner, standings, schedule, seriesExpansion } from './data/leagueData.js'

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="stat-card">
      <Icon size={22} />
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Ninth St Paddock Presents</p>
        <h1>RaceShed Fantasy</h1>
        <p className="tagline">Weekly picks. Big momentum. Full RaceShed chaos.</p>
        <div className="hero-actions">
          <a href="#standings">View Standings</a>
          <a href="#tv-mode" className="secondary">TV Mode</a>
        </div>
      </div>
      <div className="logo-card">
        <div className="rs-mark">RS</div>
        <span>Raised at Two<br />Gathered at Three</span>
      </div>
    </header>
  )
}

function WeeklyWinner() {
  return (
    <section className="winner-card">
      <div>
        <p className="eyebrow">{weeklyWinner.headline}</p>
        <h2>{weeklyWinner.winner} won {weeklyWinner.race}</h2>
        <p>{weeklyWinner.detail}</p>
      </div>
      <div className="winner-points">
        <Trophy size={34} />
        <strong>{weeklyWinner.points}</strong>
        <span>points</span>
      </div>
    </section>
  )
}

function RaceSpotlight() {
  return (
    <section className="panel spotlight">
      <div className="panel-title">
        <Flag />
        <h2>Race Spotlight</h2>
      </div>
      <h3>{currentRace.name}</h3>
      <p>{currentRace.note}</p>
      <div className="spot-grid">
        <span><b>Track:</b> {currentRace.track}</span>
        <span><b>Race #:</b> {currentRace.raceNumber}</span>
        <span><b>Type:</b> {currentRace.type}</span>
        <span><b>Deadline:</b> {currentRace.deadline}</span>
      </div>
    </section>
  )
}

function Standings() {
  return (
    <section className="panel" id="standings">
      <div className="panel-title">
        <Users />
        <h2>Season Standings</h2>
      </div>
      <div className="standings-table">
        {standings.map((row) => (
          <div className="standing-row" key={row.player}>
            <span className="rank">#{row.rank}</span>
            <span className="player">{row.player}</span>
            <span>{row.points} pts</span>
            <span>{row.wins} win{row.wins === 1 ? '' : 's'}</span>
            <span>{row.lastRace} last race</span>
            <em>{row.trend}</em>
          </div>
        ))}
      </div>
    </section>
  )
}

function TVMode() {
  const leader = standings[0]
  return (
    <section className="tv-mode" id="tv-mode">
      <div className="tv-header">
        <Tv />
        <h2>RaceShed TV Mode</h2>
      </div>
      <div className="ticker">
        <span>Current Leader: {leader.player} — {leader.points} pts</span>
        <span>Last Winner: {weeklyWinner.winner} — {weeklyWinner.points} pts</span>
        <span>Next Race: {currentRace.name}</span>
      </div>
    </section>
  )
}

function Schedule() {
  return (
    <section className="panel">
      <div className="panel-title">
        <CalendarDays />
        <h2>Race Schedule Board</h2>
      </div>
      <div className="schedule-grid">
        {schedule.map((race, index) => (
          <div className={index + 1 === currentRace.raceNumber ? 'race-tile active' : 'race-tile'} key={race}>
            <span>Race {index + 1}</span>
            <strong>{race}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

function Expansion() {
  return (
    <section className="panel">
      <div className="panel-title">
        <Rocket />
        <h2>Series Expansion Garage</h2>
      </div>
      <div className="expansion-grid">
        {seriesExpansion.map((item) => (
          <div className="expansion-card" key={item.series}>
            <strong>{item.series}</strong>
            <span>{item.status}</span>
            <p>{item.vibe}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main>
      <Header />
      <section className="stats">
        <StatCard label="League" value={leagueInfo.season} icon={Gauge} />
        <StatCard label="Buy-In" value={leagueInfo.buyIn} icon={Flame} />
        <StatCard label="Pick Rule" value={leagueInfo.pickRule} icon={Flag} />
      </section>
      <WeeklyWinner />
      <div className="layout">
        <RaceSpotlight />
        <Standings />
      </div>
      <TVMode />
      <Schedule />
      <Expansion />
      <footer>
        <strong>RACESHED</strong> Fantasy V16 Reborn — built for GitHub + Vercel.
      </footer>
    </main>
  )
}
