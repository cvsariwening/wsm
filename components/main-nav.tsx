"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Tentang Kami",
      href: "#",
      children: [
        {
          name: "Profil Perusahaan",
          href: "/tentang-kami/profil",
          description: "Cerita singkat dan visi misi CV. Sari Wening",
        },
        {
          name: "Manajemen",
          href: "/tentang-kami/manajemen",
          description: "Daftar tim manajemen atau pimpinan perusahaan",
        },
        {
          name: "Struktur Organisasi",
          href: "/tentang-kami/struktur-organisasi",
          description: "Diagram atau deskripsi struktur organisasi",
        },
      ],
    },
    {
      name: "Tata Kelola Perusahaan",
      href: "/tata-kelola",
    },
    {
      name: "Sertifikasi",
      href: "/sertifikasi",
    },
    {
      name: "Produk",
      href: "/produk",
    },
    {
      name: "Dokumen Legalitas",
      href: "/dokumen-legalitas",
    },
  ]

  return (
    <>
      <div className="mr-4 flex">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="CV. Sari Wening Logo"
            width={100}
            height={150}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((route) => {
              if (route.children) {
                return (
                  <NavigationMenuItem key={route.name}>
                    <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-gray-100 hover:text-maroon-900">
                      {route.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {route.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-maroon-900 focus:bg-gray-100 focus:text-maroon-900"
                              >
                                <div className="text-sm font-medium leading-none">{child.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">{child.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={route.name}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-maroon-900",
                        pathname === route.href && "bg-gray-100 text-maroon-900 font-medium",
                      )}
                    >
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="flex flex-1 items-center justify-end lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-700">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <DialogTitle asChild>
              <span className="text-xl font-bold gradient-text">CV. Sari Wening</span>
            </DialogTitle>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="mt-8 flex flex-col space-y-4">
          {routes.map((route) => {
            if (route.children) {
              return (
                <div key={route.name} className="space-y-3">
                  <div className="font-medium text-gray-900">{route.name}</div>
                  <div className="ml-4 space-y-2">
                    {route.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block text-gray-700 hover:text-maroon-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={route.name}
                href={route.href}
                className={cn(
                  "font-medium text-gray-700 hover:text-maroon-900",
                  pathname === route.href && "text-maroon-900 font-semibold"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
      </div>
    </>
  )
}
