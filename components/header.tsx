"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const mainNavItems = [
    { name: "EKO GARDENS", href: "/gardens" },
    { name: "EKO HOTEL", href: "/hotel" },
    { name: "EKO SUITES", href: "/suites" },
    { name: "EKO SIGNATURE", href: "/signature" },
    { name: "EKO TOWER II", href: "/tower" },
  ]

  const secondaryNavItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "DINING", href: "/dining" },
    { name: "MEETINGS & BANQUETING", href: "/meetings" },
    { name: "RECREATIONAL SERVICES", href: "/recreation" },
    { name: "EVENTS", href: "/events" },
    { name: "PACKAGES", href: "/packages" },
    { name: "GALLERY", href: "/gallery" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top Navigation */}
      <div className="border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-6">
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Link href="/company">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200"
                >
                  THE COMPANY
                </Button>
              </Link>
              <Link href="/special-offers">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  SPECIAL OFFERS
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Link href="#" className="text-slate-600 hover:text-amber-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-600 hover:text-amber-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">EKO</span>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-800">Eko Hotels</div>
              <div className="text-sm text-slate-600">& Suites</div>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              {secondaryNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Properties</h3>
                  <div className="space-y-3">
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-slate-700 hover:text-amber-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Navigation</h3>
                  <div className="space-y-3">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-slate-700 hover:text-amber-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <Link
                    href="/company"
                    className="block text-slate-700 hover:text-amber-600"
                    onClick={() => setIsOpen(false)}
                  >
                    THE COMPANY
                  </Link>
                  <Link
                    href="/special-offers"
                    className="block text-slate-700 hover:text-amber-600"
                    onClick={() => setIsOpen(false)}
                  >
                    SPECIAL OFFERS
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
