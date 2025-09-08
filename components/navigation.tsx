"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Attempting to scroll to section:", sectionId)
    const element = document.getElementById(sectionId)
    console.log("[v0] Found element:", element)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
      setIsOpen(false)
      console.log("[v0] Scrolling to section:", sectionId)

      const navButton = document.querySelector(`[data-section="${sectionId}"]`)
      if (navButton) {
        navButton.classList.add("animate-pulse")
        setTimeout(() => {
          navButton.classList.remove("animate-pulse")
        }, 1000)
      }
    } else {
      console.log("[v0] Element not found for ID:", sectionId)
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg transition-all duration-300"
      style={{ backgroundColor: "#111827", borderColor: "#374151" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <button
                data-section="hero"
                onClick={() => scrollToSection("hero")}
                className="transition-all duration-300 px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                  e.target.style.borderColor = "#3AAFA9"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.borderColor = "transparent"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                Home
              </button>
              <button
                data-section="about"
                onClick={() => scrollToSection("about")}
                className="transition-all duration-300 px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                  e.target.style.borderColor = "#3AAFA9"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.borderColor = "transparent"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                About
              </button>
              <button
                data-section="skills"
                onClick={() => scrollToSection("skills")}
                className="transition-all duration-300 px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                  e.target.style.borderColor = "#3AAFA9"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.borderColor = "transparent"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                Skills
              </button>
              <button
                data-section="contact"
                onClick={() => scrollToSection("contact")}
                className="transition-all duration-300 px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                  e.target.style.borderColor = "#3AAFA9"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.borderColor = "transparent"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden absolute right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ color: "#D1D5DB" }}
              onMouseEnter={(e) => {
                e.target.style.color = "#000000"
                e.target.style.backgroundColor = "#3AAFA9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#D1D5DB"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t rounded-b-lg"
              style={{ backgroundColor: "#1F2937", borderColor: "#374151" }}
            >
              <button
                onClick={() => scrollToSection("hero")}
                className="block transition-all duration-300 px-3 py-2 text-base font-medium w-full text-left rounded-md hover:scale-105 active:scale-95"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block transition-all duration-300 px-3 py-2 text-base font-medium w-full text-left rounded-md hover:scale-105 active:scale-95"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block transition-all duration-300 px-3 py-2 text-base font-medium w-full text-left rounded-md hover:scale-105 active:scale-95"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block transition-all duration-300 px-3 py-2 text-base font-medium w-full text-left rounded-md hover:scale-105 active:scale-95"
                style={{ color: "#D1D5DB" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#000000"
                  e.target.style.backgroundColor = "#3AAFA9"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#D1D5DB"
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
