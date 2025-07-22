"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
//import { ModeToggle } from "@/components/mode-toggle" // Add this after installing theme-toggle
import { ShoppingCart, Menu } from "lucide-react"

export function Navbar() {
    return (
        <header className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <nav>
                    <a href="/" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        K-COM
                    </a>
                </nav>
                

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Bar */}
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-4">
                        <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                            Fashion
                        </a>
                        <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                            Electronics
                        </a>
                        <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                            Home & Living
                        </a>
                        <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                            Sports
                        </a>
                    </nav>
                    <Input
                        type="text"
                        placeholder="Search products..."
                        className="w-64"
                    />

                    {/* Cart */}
                    <Button variant="outline" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                            2
                        </Badge>
                    </Button>

                    {/* Theme Toggle */}
                    {/* <ModeToggle /> */}

                    {/* Clerk Auth */}
                    <SignedOut>
                        <SignInButton mode="modal" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-2">
                    <Button variant="outline" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                            2
                        </Badge>
                    </Button>

                    {/* <ModeToggle /> */}

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <div className="flex flex-col gap-4 p-4">
                                <Input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full"
                                />
                                <Separator />
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
