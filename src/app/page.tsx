"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export default function WhatsAppRedirect() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const formatPhoneNumber = (number: string) => {
    const cleaned = number.replace(/\D/g, "")
    return cleaned.startsWith("1") ? `+${cleaned}` : `+1${cleaned}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formattedNumber = formatPhoneNumber(phoneNumber)
    window.location.href = `https://wa.me/${formattedNumber}`
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#010203] relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Card className="w-full max-w-md relative bg-[#1a1d20] border-[#2a2d30] shadow-2xl">
        <CardContent className="p-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#075e54] mb-6 shadow-lg">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Direct Message</h1>
            <p className="text-[#b8c0c8] text-sm">Start a WhatsApp chat without saving contacts</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-[#242a30] border-[#3a424a] text-white placeholder:text-[#8895a7]"
              required
            />

            <Button type="submit" className="w-full bg-[#075e54] hover:bg-[#064d44] text-white font-medium py-6">
              Open in WhatsApp
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-[#8895a7]">Examples: (123) 456-7890 • +1234567890 • 1234567890</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

