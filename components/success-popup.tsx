"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export function SuccessPopup({ isOpen, onClose, title, message }: SuccessPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">{message}</p>
          <Button onClick={onClose} className="w-full">
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
