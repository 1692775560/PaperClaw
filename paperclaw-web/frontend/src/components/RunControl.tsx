import { useState, useEffect } from 'react'
import './RunControl.css'

interface RunControlProps {
  onRunStart: (run: any) => void
}

export default function RunControl({ onRunStart }: RunControlProps) {
  const [topic, setTopic] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [provider, setProvider] = useState('deepseek')
  const [isRunning, setIsRunning] = useState(false)

  // 从localStorage加载保存的配置
  useEffect(() => {
    const savedApiKey = localStorage.getItem('paperclaw_api_key')
    const savedProvider = localStorage.getItem('paperclaw_provider')
    if (savedApiKey) setApiKey(savedApiKey)
    if (savedProvider) setProvider(savedProvider)
  }, [])

  // 保存API Key到localStorage
  const handleApiKeyChange = (value: string) => {
    setApiKey(value)
    localStorage.setItem('paperclaw_api_key', value)
  }

  // 保存Provider到localStorage
  const handleProviderChange = (value: string) => {
    setProvider(value)
    localStorage.setItem('paperclaw_provider', value)
  }

  const handleStart = async () => {
    if (!topic || !apiKey) {
      alert('Please enter research topic and API Key')
      return
    }

    setIsRunning(true)
    try {
      const response = await fetch('http://localhost:5001/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, api_key: apiKey, provider })
      })
      const data = await response.json()
      onRunStart(data.run)
    } catch (error) {
      console.error('Failed to start run:', error)
      alert('Failed to start. Please check if backend server is running.')
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="run-control">
      <h2>Start New Research</h2>
      <div className="form-group">
        <label>Research Topic</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., LLM applications in code generation"
          disabled={isRunning}
        />
      </div>
      <div className="form-group">
        <label>LLM Provider</label>
        <select value={provider} onChange={(e) => handleProviderChange(e.target.value)} disabled={isRunning}>
          <option value="deepseek">DeepSeek</option>
          <option value="openai">OpenAI</option>
          <option value="anthropic">Anthropic</option>
        </select>
      </div>
      <div className="form-group">
        <label>API Key (Auto-saved)</label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => handleApiKeyChange(e.target.value)}
          placeholder="sk-..."
          disabled={isRunning}
        />
      </div>
      <button 
        className="start-button" 
        onClick={handleStart}
        disabled={isRunning}
      >
        {isRunning ? 'Starting...' : 'Start Research'}
      </button>
    </div>
  )
}
