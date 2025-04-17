import { Button } from "@/components/ui/button"
import { Calendar, Users, Video, MessageSquare, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center w-full justify-center items-center">
      {/* Hero Section */}
      <section className="w-full flex py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950 justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Meetings Made Simple with Meetra
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Schedule, join, and manage your meetings effortlessly. Connect with your team from anywhere in the
                  world.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Meetra Dashboard"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex justify-center items-center text-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything You Need for Seamless Meetings
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meetra provides all the tools you need to make your meetings productive and enjoyable.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Smart Scheduling</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Intelligent calendar integration that finds the perfect time for everyone.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">HD Video Calls</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Crystal clear video and audio for productive virtual meetings.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Seamless tools for sharing ideas and working together in real-time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Chat & Messaging</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Keep the conversation going before, during, and after meetings.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Time Management</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Tools to keep meetings on track and respect everyone's time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure Meetings</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                End-to-end encryption and privacy controls for confidential discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900 justify-center flex">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto flex items-center justify-center lg:order-last">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Meetra Team"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Meetra</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Meetra was founded with a simple mission: to make meetings more productive and enjoyable for teams
                  everywhere.
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of collaboration experts and software engineers has created a platform that addresses the
                common pain points of virtual meetings. We believe that great meetings lead to great work, and our tools
                are designed to facilitate meaningful connections regardless of physical location.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                With users in over 50 countries, Meetra is helping teams around the world collaborate more effectively
                and build stronger relationships.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
