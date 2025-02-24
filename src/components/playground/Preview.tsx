import React from 'react'

interface PreviewProps {
  code: string
}

export const Preview: React.FC<PreviewProps> = ({ code }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-[400px] overflow-auto">
      <div className="preview-content">
        {/* Add your preview logic here */}
        <pre className="text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}