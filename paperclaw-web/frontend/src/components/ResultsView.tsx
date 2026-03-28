import { useState } from 'react'
import './ResultsView.css'

interface PipelineRun {
  run_id: string
  topic: string
  status: 'running' | 'completed' | 'failed'
  current_stage: number
  total_stages: number
  stage_name: string
  progress: number
}

interface ResultsViewProps {
  runs: PipelineRun[]
}

export default function ResultsView({ runs }: ResultsViewProps) {
  const [selectedRun, setSelectedRun] = useState<string | null>(null)
  const [deliverables, setDeliverables] = useState<any>(null)

  const completedRuns = runs.filter(r => r.status === 'completed')

  const loadDeliverables = async (runId: string) => {
    try {
      const response = await fetch(`http://localhost:5001/api/results/${runId}`)
      const data = await response.json()
      setDeliverables(data)
      setSelectedRun(runId)
    } catch (error) {
      console.error('Failed to load deliverables:', error)
    }
  }

  return (
    <div className="results-view">
      <h2>Research Results</h2>
      <div className="results-container">
        <div className="runs-sidebar">
          <h3>Completed Runs</h3>
          {completedRuns.length === 0 ? (
            <p className="empty-state">No completed runs</p>
          ) : (
            completedRuns.map((run) => (
              <div
                key={run.run_id}
                className={`run-item ${selectedRun === run.run_id ? 'selected' : ''}`}
                onClick={() => loadDeliverables(run.run_id)}
              >
                <p className="run-topic">{run.topic}</p>
                <p className="run-id">{run.run_id}</p>
              </div>
            ))
          )}
        </div>

        <div className="deliverables-panel">
          {!deliverables ? (
            <p className="empty-state">Select a run to view results</p>
          ) : (
            <>
              <h3>Output Files</h3>
              <div className="files-list">
                {deliverables.files?.map((file: any) => (
                  <div key={file.name} className="file-item">
                    <span className="file-icon">FILE</span>
                    <span className="file-name">{file.name}</span>
                    <a 
                      href={`http://localhost:5001/api/download/${selectedRun}/${file.name}`}
                      className="download-link"
                      download
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>

              {deliverables.paper_preview && (
                <div className="paper-preview">
                  <h3>Paper Preview</h3>
                  <pre>{deliverables.paper_preview}</pre>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
