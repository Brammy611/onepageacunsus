"use client"

import * as React from "react"
import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavMenu() {
  return (
    <nav className="flex items-center justify-between py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Chat AI
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
          Features
        </Link>
        <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
          Pricing
        </Link>
        <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
          About
        </Link>
        <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
          Contact
        </Link>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden sm:inline-flex">
          Sign In
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </div>
    </nav>
  )
}
