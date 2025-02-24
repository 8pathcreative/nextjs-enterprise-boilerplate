import React from 'react'
import { navbarSnippets } from '@/snippets/navigation/navbar-snippets'

export const SnippetsManager = () => {
  const [selectedSnippet, setSelectedSnippet] = React.useState(navbarSnippets[0])

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        {navbarSnippets.map((snippet) => (
          <button
            key={snippet.id}
            onClick={() => setSelectedSnippet(snippet)}
            className={`px-4 py-2 rounded ${
              selectedSnippet.id === snippet.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100'
            }`}
          >
            {snippet.name}
          </button>
        ))}
      </div>
      <div className="border rounded-lg p-4">
        {selectedSnippet.component}
      </div>
    </div>
  )
}