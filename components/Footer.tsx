"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-800 bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Snabblänkar</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block text-neutral-400 transition-colors hover:text-white">
                Hem
              </a>
              <a href="#integration" className="block text-neutral-400 transition-colors hover:text-white">
                Integration
              </a>
              <a href="#contact" className="block text-neutral-400 transition-colors hover:text-white">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakta oss</h3>
            <address className="space-y-2 text-sm not-italic text-neutral-400">
              <p>Barkåkravägen 102D</p>
              <p>Ängelholm, Sverige</p>
              <p className="pt-2">E-post: kontakt@bataksolutions.se</p>
            </address>
          </div>

          {/* Social Media */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Följ oss</h3>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Följ oss på Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Följ oss på Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Följ oss på Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Anslut med oss på LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-neutral-400">
            © 2025 Batak Solutions AB. Alla rättigheter förbehållna.
          </p>
          <a href="/integritetspolicy" className="text-sm text-neutral-400 transition-colors hover:text-white">
            Integritetspolicy
          </a>
        </div>
      </div>
    </footer>
  )
}
