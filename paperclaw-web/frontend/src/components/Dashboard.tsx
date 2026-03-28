import './Dashboard.css'

interface PipelineRun {
  run_id: string
  topic: string
  status: 'running' | 'completed' | 'failed'
  current_stage: number
  total_stages: number
  stage_name: string
  progress: number
}

interface DashboardProps {
  runs: PipelineRun[]
}

export default function Dashboard({ runs }: DashboardProps) {
  return (
    <div className="dashboard">
      <h2>Recent Runs</h2>
      {runs.length === 0 ? (
        <p className="empty-state">No runs yet</p>
      ) : (
        <div className="runs-list">
          {runs.map((run) => (
            <div key={run.run_id} className="run-card">
              <div className="run-header">
                <span className={`status-badge ${run.status}`}>
                  {run.status === 'running' ? 'RUNNING' : 
                   run.status === 'completed' ? 'COMPLETED' : 'FAILED'}
                </span>
                <span className="run-id">{run.run_id}</span>
              </div>
              <h3>{run.topic}</h3>
              <div className="run-progress">
                <div className="progress-bar-mini" style={{ width: `${run.progress}%` }} />
              </div>
              <p className="run-stage">
                Stage {run.current_stage}/{run.total_stages} - {run.stage_name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
