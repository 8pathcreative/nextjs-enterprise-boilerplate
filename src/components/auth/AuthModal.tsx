import React from 'react'
import { Dialog } from '@radix-ui/react-dialog'

export const AuthModal = () => {
  return (
    <Dialog>
      <Dialog.Content className="bg-white p-6 rounded-lg">
        <Dialog.Title>Sign In</Dialog.Title>
        {/* Add authentication form */}
      </Dialog.Content>
    </Dialog>
  )
}