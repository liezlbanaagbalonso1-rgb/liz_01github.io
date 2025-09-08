"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUp,
  Shield,
  Network,
  Server,
  Lock,
  Database,
  X,
  Eye,
  Users,
  Award,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [scrollProgress, setScrollProgress] = useState(0)
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [showCertificatesModal, setShowCertificatesModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      const sections = ["hero", "about", "skills", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleViewResume = () => {
    setShowResumeModal(true)
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/liezl-balonso-resume.pdf"
    link.download = "Liezl_Balonso_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSmoothScroll = (e: any, id: string) => {
    e?.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-500 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: "#3AAFA9",
          boxShadow: scrollProgress > 0 ? "0 0 10px rgba(58, 175, 169, 0.5)" : "none",
        }}
      />

      <Navigation />

      {showResumeModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
            <div
              className="flex items-center justify-between p-4 border-b border-gray-700"
              style={{ backgroundColor: "#1f2937" }}
            >
              <h3 className="text-lg font-semibold text-white">Resume - Liezl Balonso</h3>
              <div className="flex gap-2">
                <Button
                  onClick={handleDownloadResume}
                  size="sm"
                  style={{ backgroundColor: "#3AAFA9", color: "#000000" }}
                  className="hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button
                  onClick={() => setShowResumeModal(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:bg-gray-700 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] bg-gray-800">
              <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="text-center border-b border-gray-600 pb-6 animate-in slide-in-from-top-2 duration-700">
                  <h1 className="text-3xl font-bold mb-2 text-white">LIEZL BALONSO</h1>
                  <div className="space-y-1 text-sm text-gray-300">
                    <p>Santa Lucia, Pasig City, Philippines 1608</p>
                    <p>09152471590</p>
                    <p>liezlbanaagbalonso1@gmail.com</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="animate-in slide-in-from-left-2 duration-700 delay-100">
                  <p className="text-sm leading-relaxed text-gray-300">
                    Google-certified in cybersecurity and IT support with foundational knowledge in network security,
                    risk management, Linux, and SQL. Completed multiple certifications covering assets, threats,
                    vulnerabilities, and system operations. Demonstrates problem-solving skills, adaptability, and a
                    growing technical foundation to provide reliable support and contribute to secure and efficient IT
                    environments.
                  </p>
                </div>

                {/* Social Networks */}
                <div className="animate-in slide-in-from-right-2 duration-700 delay-200">
                  <h2 className="text-lg font-bold mb-2 text-teal-400">SOCIAL NETWORKS</h2>
                  <p className="text-sm text-gray-300">https://www.linkedin.com/in/liezl-balonso-46678830b/</p>
                </div>

                {/* Skills */}
                <div className="animate-in slide-in-from-left-2 duration-700 delay-300">
                  <h2 className="text-lg font-bold mb-2 text-teal-400">SKILLS</h2>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>• Cybersecurity awareness</p>
                    <p>• Systems integration</p>
                    <p>• Communication skills</p>
                    <p>• Network troubleshooting</p>
                    <p>• Database management</p>
                  </div>
                </div>

                {/* Education */}
                <div className="animate-in slide-in-from-right-2 duration-700 delay-400">
                  <h2 className="text-lg font-bold mb-2 text-teal-400">EDUCATION</h2>
                  <div className="text-sm text-gray-300">
                    <h3 className="font-semibold text-white">Bachelor of Science: Information Technology</h3>
                    <p>Laguna State Polytechnic University - Siniloan Laguna, 01/2023 - Current</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="animate-in slide-in-from-left-2 duration-700 delay-500">
                  <h2 className="text-lg font-bold mb-2 text-teal-400">LANGUAGES</h2>
                  <p className="text-sm text-gray-300">English: B2 Upper Intermediate</p>
                </div>

                {/* Certifications */}
                <div className="animate-in slide-in-from-right-2 duration-700 delay-600">
                  <h2 className="text-lg font-bold mb-2 text-teal-400">CERTIFICATIONS</h2>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="border-l-2 border-teal-400 pl-3">
                      <p className="font-semibold text-white">Assets, Threats, and Vulnerabilities</p>
                      <p className="text-xs">Google — Issued Apr 2025 · Credential ID: OXZTHDUEIGOL</p>
                    </div>
                    <div className="border-l-2 border-teal-400 pl-3">
                      <p className="font-semibold text-white">Connect and Protect: Networks and Network Security</p>
                      <p className="text-xs">Google — Issued Jan 2025 · Credential ID: UBMHVGU84YLR</p>
                    </div>
                    <div className="border-l-2 border-teal-400 pl-3">
                      <p className="font-semibold text-white">Foundations of Cybersecurity</p>
                      <p className="text-xs">Google — Issued Jan 2025 · Credential ID: IHPAE27EM2ZU</p>
                    </div>
                    <div className="border-l-2 border-teal-400 pl-3">
                      <p className="font-semibold text-white">Play It Safe: Manage Security Risks</p>
                      <p className="text-xs">Google — Issued Jan 2025</p>
                    </div>
                    <div className="border-l-2 border-teal-400 pl-3">
                      <p className="font-semibold text-white">Tools of the Trade: Linux and SQL</p>
                      <p className="text-xs">Google — Issued Jan 2025 · Credential ID: 9YIIDEICMMNV</p>
                    </div>
                    <div className="border-l-2 border-teal-400 pl-3">
                      <p className="font-semibold text-white">ChatGPT for Cybersecurity</p>
                      <p className="text-xs">Simplilearn — Issued May 6, 2025 · Certificate code: 8309230</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${
          activeSection === "home" ? "opacity-100 translate-y-0" : "opacity-90"
        }`}
        style={{ backgroundColor: "#111827" }}
      >
        <div className="absolute inset-0 z-0">
          {/* Circuit pattern background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20"
                    stroke="#3AAFA9"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <circle cx="10" cy="10" r="1" fill="#3AAFA9" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>

          {/* Floating tech icons */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 animate-pulse" style={{ color: "#3AAFA9", opacity: 0.3 }}>
            <Server className="w-full h-full" />
          </div>
          <div
            className="absolute top-1/3 right-1/3 w-6 h-6 animate-pulse delay-1000"
            style={{ color: "#3AAFA9", opacity: 0.25 }}
          >
            <Lock className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/5 w-7 h-7 animate-pulse delay-2000"
            style={{ color: "#3AAFA9", opacity: 0.2 }}
          >
            <Network className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-1/4 right-1/4 w-5 h-5 animate-pulse delay-500"
            style={{ color: "#3AAFA9", opacity: 0.3 }}
          >
            <Database className="w-full h-full" />
          </div>

          {/* Gradient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: "#3AAFA9", opacity: 0.1 }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ backgroundColor: "#2B7A78", opacity: 0.08 }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center z-10 relative pt-16 sm:pt-20 md:pt-24">
            <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
              <div className="flex justify-center">
                <div
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 shadow-2xl transform hover:scale-105 transition-all duration-500"
                  style={{ borderColor: "#3AAFA9" }}
                >
                  <img
                    src="/liezl-photo.jpg"
                    alt="Liezl Balonso"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4 text-teal-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Liezl Balonso
            </h2>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{ color: "#FFFFFF" }}
            >
              Future Network Administrator
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
              style={{ color: "#D1D5DB" }}
            >
              Beginning my journey in network administration and cybersecurity. Passionate about securing digital
              infrastructure and protecting organizations from cyber threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button
                variant="outline"
                onClick={handleViewResume}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 bg-transparent hover:shadow-lg border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-16 sm:py-20 transition-all duration-1000 ${
          activeSection === "about" ? "opacity-100 translate-y-0" : "opacity-90"
        }`}
        style={{ backgroundColor: "#1F2937" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance"
              style={{ color: "#FFFFFF" }}
            >
              About Me
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-pretty text-gray-300">
              Aspiring network administrator with Google Cybersecurity certifications, eager to learn more about
              networking and security. While still building my skills, I am enthusiastic about exploring IT technologies
              and gaining hands-on experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="animate-in slide-in-from-left-4 duration-1000">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Services & Expertise</h3>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3AAFA9" }}></div>
                      <span className="text-sm font-medium text-gray-200">Network Security Management</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3AAFA9" }}></div>
                      <span className="text-sm font-medium text-gray-200">Risk Assessment & Management</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3AAFA9" }}></div>
                      <span className="text-sm font-medium text-gray-200">Linux System Administration</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3AAFA9" }}></div>
                      <span className="text-sm font-medium text-gray-200">SQL Database Security</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg sm:col-span-2 bg-gray-800">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3AAFA9" }}></div>
                      <span className="text-sm font-medium text-gray-200">Threat & Vulnerability Assessment</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Certifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-800 p-2 rounded-lg border border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chatgpt%20for%20Cybersecurity_page-0001.jpg-4fHxSy6KLJ6Uo04plos7X8mNlBTYtP.jpeg"
                        alt="ChatGPT for Cybersecurity Certificate"
                        className="w-full h-auto rounded cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => setShowCertificatesModal(true)}
                      />
                    </div>
                    <div className="bg-gray-800 p-2 rounded-lg border border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coursera%20Assets%2C%20threats%20and%20vulnerabilities_page-0001.jpg-OHokHXYyg3cdRrnFPog3FAaqPceOaA.jpeg"
                        alt="Assets, Threats, and Vulnerabilities Certificate"
                        className="w-full h-auto rounded cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => setShowCertificatesModal(true)}
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowCertificatesModal(true)}
                      className="w-full border-teal-400 text-white bg-gray-800 hover:bg-teal-400 hover:text-black transition-all duration-200"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View All Certifications
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-16 sm:py-20 transition-all duration-1000 ${
          activeSection === "skills" ? "opacity-100 translate-y-0" : "opacity-90"
        }`}
        style={{ backgroundColor: "#111827" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white">Skills</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-pretty text-gray-300">
              Building foundational skills in cybersecurity and network administration through hands-on learning and
              certification programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Technical Skills */}
            <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="flex items-center mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#3AAFA9" }}
                >
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Network Security
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Linux Administration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  SQL Database Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Risk Assessment
                </li>
              </ul>
            </div>

            {/* Security Tools */}
            <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="flex items-center mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#3AAFA9" }}
                >
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Security Tools</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Vulnerability Scanners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Network Monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Incident Response
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Threat Detection
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#3AAFA9" }}
                >
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Problem Solving
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Communication
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Adaptability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#3AAFA9" }}></div>
                  Team Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 sm:py-20 transition-all duration-1000 ${
          activeSection === "contact" ? "opacity-100 translate-y-0" : "opacity-90"
        }`}
        style={{ backgroundColor: "#1F2937" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance"
              style={{ color: "#FFFFFF" }}
            >
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-pretty text-gray-300">
              Ready to start a conversation about cybersecurity, networking, or potential opportunities? I'd love to
              connect with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="animate-in slide-in-from-left-4 duration-1000">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Let's Connect</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center p-4 sm:p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 sm:mr-6"
                    style={{ backgroundColor: "#3AAFA9" }}
                  >
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Email</h4>
                    <p className="text-gray-300">liezlbanaagbalonso1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center p-4 sm:p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 sm:mr-6"
                    style={{ backgroundColor: "#3AAFA9" }}
                  >
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Phone</h4>
                    <p className="text-gray-300">09152471590</p>
                  </div>
                </div>
                <div className="flex items-center p-4 sm:p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 sm:mr-6"
                    style={{ backgroundColor: "#3AAFA9" }}
                  >
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Location</h4>
                    <p className="text-gray-300">Santa Lucia, Pasig City, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/19MB6S14Cp/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 bg-gray-800 hover:bg-gray-700 border border-gray-600"
                  >
                    <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/liezl-balonso-46678830b?trk=people-search-result"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 bg-gray-800 hover:bg-gray-700 border border-gray-600"
                  >
                    <Linkedin className="w-5 h-5 text-teal-400" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 bg-gray-800 hover:bg-gray-700 border border-gray-600"
                  >
                    <Github className="w-5 h-5 text-teal-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-in slide-in-from-right-4 duration-1000">
              <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-600">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Send a Message</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full py-3 text-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: "#3AAFA9", color: "#000000" }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, "about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, "skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, "contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
                  <Mail className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-200">
                    liezlbanaagbalonso1@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
                  <Phone className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-200">09152471590</p>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
                  <MapPin className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-200">
                    Santa Lucia, Pasig City
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 Liezl Balonso. Made with ❤️ using Next.js and Tailwind CSS.
            </p>
            <Button
              variant="ghost"
              onClick={() => handleSmoothScroll(null, "home")}
              className="text-teal-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </footer>

      {showCertificatesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">Certifications</h3>
              <Button
                onClick={() => setShowCertificatesModal(false)}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:bg-gray-700 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-2 rounded-lg border border-gray-600 shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chatgpt%20for%20Cybersecurity_page-0001.jpg-4fHxSy6KLJ6Uo04plos7X8mNlBTYtP.jpeg"
                  alt="ChatGPT for Cybersecurity Certificate"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="bg-gray-700 p-2 rounded-lg border border-gray-600 shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coursera%20Assets%2C%20threats%20and%20vulnerabilities_page-0001.jpg-OHokHXYyg3cdRrnFPog3FAaqPceOaA.jpeg"
                  alt="Assets, Threats, and Vulnerabilities Certificate"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="bg-gray-700 p-2 rounded-lg border border-gray-600 shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foundations%20of%20cybersecurity_page-0001.jpg-4e1mYJrm9kWQKveTQMxJqlQrYiO2gu.jpeg"
                  alt="Foundations of Cybersecurity Certificate"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="bg-gray-700 p-2 rounded-lg border border-gray-600 shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coursera%20%20Sound%20the%20Alarm%20Detection%20and%20Response_page-0001.jpg-RHPZ8nGnC6cRci3SqTFoIV2qCWj3AQ.jpeg"
                  alt="Sound the Alarm: Detection and Response Certificate"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
