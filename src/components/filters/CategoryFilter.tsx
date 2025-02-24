import React from 'react'

export const CategoryFilter = ({ categories, onSelect }) => {
  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          {category}
        </button>
      ))}
    </div>
  )
}