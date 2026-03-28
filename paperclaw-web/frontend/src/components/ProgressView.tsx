import './ProgressView.css'

interface PipelineRun {
  run_id: string
  topic: string
  status: 'running' | 'completed' | 'failed'
  current_stage: number
  total_stages: number
  stage_name: string
  progress: number
}

interface ProgressViewProps {
  run: PipelineRun
}

const STAGES = [
  'TOPIC_INIT', 'PROBLEM_DECOMPOSE', 'SEARCH_STRATEGY', 'LITERATURE_COLLECT',
  'LITERATURE_SCREEN', 'KNOWLEDGE_EXTRACT', 'SYNTHESIS', 'HYPOTHESIS_GEN',
  'EXPERIMENT_DESIGN', 'CODE_GENERATION', 'RESOURCE_PLANNING', 'EXPERIMENT_RUN',
  'ITERATIVE_REFINE', 'RESULT_ANALYSIS', 'RESEARCH_DECISION', 'PAPER_OUTLINE',
  'PAPER_DRAFT', 'PEER_REVIEW', 'PAPER_REVISION', 'QUALITY_GATE',
  'KNOWLEDGE_ARCHIVE', 'EXPORT_PUBLISH', 'CITATION_VERIFY'
]

export default function ProgressView({ run }: ProgressViewProps) {
  const statusText = run.status === 'running' ? 'RUNNING' : run.status === 'completed' ? 'COMPLETED' : 'FAILED'
  const statusClass = run.status === 'running' ? 'status-running' : run.status === 'completed' ? 'status-completed' : 'status-failed'

  return (
    <div className="progress-view">
      <div className="progress-header">
        <h2>
          <span className={`status-badge ${statusClass}`}>{statusText}</span>
        </h2>
        <p className="run-id">Run ID: {run.run_id}</p>
        <p className="topic">Topic: {run.topic}</p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${run.progress}%` }}>
          <span className="progress-text">{Math.round(run.progress)}%</span>
        </div>
      </div>

      <div className="stage-info">
        <p>Current Stage: <strong>{run.current_stage}/{run.total_stages}</strong> - {run.stage_name}</p>
      </div>

      <div className="stages-grid">
        {STAGES.map((stage, index) => {
          const stageNum = index + 1
          const isCompleted = stageNum < run.current_stage
          const isCurrent = stageNum === run.current_stage
          const isPending = stageNum > run.current_stage

          return (
            <div 
              key={stage} 
              className={`stage-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isPending ? 'pending' : ''}`}
            >
              <div className="stage-number">{stageNum}</div>
              <div className="stage-name">{stage}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
