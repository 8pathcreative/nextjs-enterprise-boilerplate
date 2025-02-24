'use client'

import { useState } from 'react'
import { Header } from '@/components/shared/Header'
import { CodeEditor } from '@/components/playground/CodeEditor'
import { Preview } from '@/components/playground/Preview'

const initialCode = `// Write your code here
const greeting = "Hello, World!";
console.log(greeting);`

export const metadata: Metadata = {
  title: 'Code Playground',
  description: 'Experiment with code snippets and components',
}

export default function PlaygroundPage() {
  const [code, setCode] = useState(initialCode)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        title="Code Playground"
        description="Experiment with live code examples"
        canonical="https://yoursite.com/playground"
      />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Code Playground</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Code Editor</h2>
            <CodeEditor 
              initialCode={initialCode}
              onCodeChange={setCode}
            />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <Preview code={code} />
          </section>
        </div>
      </main>
    </div>
  )
}