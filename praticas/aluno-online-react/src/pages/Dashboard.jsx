import './Dashboard.css'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import DashboardCard from '../components/DashboardCard'

const avisos = [
  'Inscrição para o projeto de extensão',
  'Eleição para representante de turma',
]

const calendario = [
  '23/02 - Início do período letivo 2026-1',
  '25/04 - Prazo final para aplicação da P1',
  '23/06 - Prazo final para aplicação da P2',
  '04/07 - Fim do período letivo 2026-1',
]

const disciplinas = [
  'Cálculo Numérico',
  'Estrutura de Dados',
  'Tecnologias Web',
]

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar />
        <DashboardCard title="Mural de Avisos" items={avisos} />
        <DashboardCard title="Calendário Acadêmico" items={calendario} />
        <DashboardCard title="Minhas Disciplinas" items={disciplinas} />
      </div>
    </div>
  )
}

export default Dashboard