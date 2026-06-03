import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemCanvas from './components/ProblemCanvas'
import EmpathyMap from './components/EmpathyMap'
import FieldResearch from './components/FieldResearch'
import UserPersona from './components/UserPersona'
import JourneyMap from './components/JourneyMap'
import RootCause from './components/RootCause'
import HMW from './components/HMW'
import Ideation from './components/Ideation'
import Brainwriting from './components/Brainwriting'
import Prototype from './components/Prototype'
import SurveyData from './components/SurveyData'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemCanvas />
      <EmpathyMap />
      <FieldResearch />
      <UserPersona />
      <JourneyMap />
      <RootCause />
      <HMW />
      <Ideation />
      <Prototype />
      <SurveyData />
      <Team />
      <Footer />
    </div>
  )
}
