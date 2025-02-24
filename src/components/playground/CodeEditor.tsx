import React, { useState } from 'react'

interface CodeEditorProps {
  initialCode?: string
  onCodeChange?: (code: string) => void
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = '',
  onCodeChange,
}) => {
  const [code, setCode] = useState(initialCode)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value
    setCode(newCode)
    onCodeChange?.(newCode)
  }

  return (
    <div className="relative">
      <textarea
        className="w-full h-[400px] font-mono text-sm p-4 bg-gray-900 text-gray-100 rounded-lg"
        value={code}
        onChange={handleChange}
        placeholder="Enter your code here..."
        spellCheck="false"
      />
    </div>
  )
}