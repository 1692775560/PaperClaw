import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import RunControl from './components/RunControl'
import ProgressView from './components/ProgressView'
import ResultsView from './components/ResultsView'

interface PipelineRun {
  run_id: string
  topic: string
  status: 'running' | 'completed' | 'failed'
  current_stage: number
  total_stages: number
  stage_name: string
  progress: number
}

function App() {
  const [currentRun, setCurrentRun] = useState<PipelineRun | null>(null)
  const [runs, setRuns] = useState<PipelineRun[]>([])
  const [activeTab, setActiveTab] = useState<'dashboard' | 'results'>('dashboard')

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/status')
        const data = await response.json()
        if (data.current_run) {
          setCurrentRun(data.current_run)
        }
        setRuns(data.recent_runs || [])
      } catch (error) {
        console.error('Failed to fetch status:', error)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-section">
          <h1>PaperClaw</h1>
          <p className="subtitle">AI-Powered Research Automation Platform</p>
        </div>
        <nav className="nav-tabs">
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={activeTab === 'results' ? 'active' : ''}
            onClick={() => setActiveTab('results')}
          >
            Results
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'dashboard' ? (
          <>
            <RunControl onRunStart={setCurrentRun} />
            {currentRun && <ProgressView run={currentRun} />}
            <Dashboard runs={runs} />
          </>
        ) : (
          <ResultsView runs={runs} />
        )}
      </main>

      <footer className="app-footer">
        <p>PaperClaw v1.0.0 | Brain + Skills + Memory Architecture</p>
      </footer>
    </div>
  )
}

export default App
