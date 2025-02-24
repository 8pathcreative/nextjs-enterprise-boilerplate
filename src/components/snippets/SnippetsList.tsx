import React from 'react'
import { SnippetsCard } from './SnippetsCard'

export const SnippetsList = ({ snippets }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {snippets.map((snippet) => (
        <SnippetsCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  )
}