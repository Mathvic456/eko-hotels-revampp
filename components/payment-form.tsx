"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaymentFormProps {
  amount: number
  onSubmit: () => void
  onBack: () => void
}

export function PaymentForm({ amount, onSubmit, onBack }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    return formatted.slice(0, 19)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setCardNumber(formatted)

    if (errors.cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!cardName.trim()) {
      newErrors.cardName = "Cardholder name is required"
    }

    const digitsOnly = cardNumber.replace(/\s/g, "")
    if (!digitsOnly) {
      newErrors.cardNumber = "Card number is required"
    } else if (digitsOnly.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits"
    }

    if (!expiryMonth) {
      newErrors.expiryMonth = "Expiry month is required"
    }

    if (!expiryYear) {
      newErrors.expiryYear = "Expiry year is required"
    }

    if (!cvv) {
      newErrors.cvv = "CVV is required"
    } else if (cvv.length < 3 || cvv.length > 4) {
      newErrors.cvv = "CVV must be 3 or 4 digits"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit()
    }
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i)
  const months = [
    { value: "01", label: "01 - January" },
    { value: "02", label: "02 - February" },
    { value: "03", label: "03 - March" },
    { value: "04", label: "04 - April" },
    { value: "05", label: "05 - May" },
    { value: "06", label: "06 - June" },
    { value: "07", label: "07 - July" },
    { value: "08", label: "08 - August" },
    { value: "09", label: "09 - September" },
    { value: "10", label: "10 - October" },
    { value: "11", label: "11 - November" },
    { value: "12", label: "12 - December" },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Payment Information</h2>
        <div className="flex items-center text-slate-600">
          <Lock className="w-4 h-4 mr-1" />
          <span className="text-sm">Secure Payment</span>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Amount</span>
          <span className="text-2xl font-bold text-amber-600">${amount.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardName">Cardholder Name</Label>
        <Input
          id="cardName"
          value={cardName}
          onChange={(e) => {
            setCardName(e.target.value)
            if (errors.cardName) {
              setErrors((prev) => ({ ...prev, cardName: "" }))
            }
          }}
          className={errors.cardName ? "border-red-500" : ""}
        />
        {errors.cardName && <p className="text-sm text-red-500">{errors.cardName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className={`pl-10 ${errors.cardNumber ? "border-red-500" : ""}`}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Expiry Month</Label>
          <Select value={expiryMonth} onValueChange={setExpiryMonth}>
            <SelectTrigger className={errors.expiryMonth ? "border-red-500" : ""}>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.expiryMonth && <p className="text-sm text-red-500">{errors.expiryMonth}</p>}
        </div>

        <div className="space-y-2">
          <Label>Expiry Year</Label>
          <Select value={expiryYear} onValueChange={setExpiryYear}>
            <SelectTrigger className={errors.expiryYear ? "border-red-500" : ""}>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.expiryYear && <p className="text-sm text-red-500">{errors.expiryYear}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            value={cvv}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 4)
              setCvv(value)
              if (errors.cvv) {
                setErrors((prev) => ({ ...prev, cvv: "" }))
              }
            }}
            className={errors.cvv ? "border-red-500" : ""}
            placeholder="123"
          />
          {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button type="submit" className="flex-1 bg-amber-600 hover:bg-amber-700">
          Complete Payment
        </Button>
      </div>
    </form>
  )
}
