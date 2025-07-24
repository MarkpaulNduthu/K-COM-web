

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "./ThemeToggle"
import { ShoppingCart, Menu } from "lucide-react"

export function Navbar() {
    return (
        <header className=" w-full md:w-auto bg-background dark:bg-gray-900 sticky top-0 z-50 rounded-b-lg shadow-md">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 px-4 py-2">
                {/* Logo */}
                <nav className="shrink-0">
                    <a href="/" className="text-sm font-bold hover:text-blue-600 transition-colors whitespace-nowrap">
                        K-COM
                    </a>
                </nav>

                <Input
                    type="text"
                    placeholder="Search products..."
                    className="max-w-[180px] sm:max-w-sm w-full"
                />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Bar */}
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-4">
                        <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                            Fashion
                        </a>
                        <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                            Electronics
                        </a>
                        <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                            Home & Living
                        </a>
                        <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                            Sports
                        </a>
                    </nav>


                    {/* Cart */}
                    <Button variant="outline" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                            2
                        </Badge>
                    </Button>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Clerk Auth */}
                    <SignedOut>
                        <SignInButton mode="modal" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-2 shrink-0">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 h-full">
                                {/* Auth */}
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>

                                <Separator />

                                {/* Mobile nav links */}
                                <nav className="flex flex-col gap-2">
                                    <a href="#" className="text-sm  hover:text-blue-600 transition-colors">
                                        Fashion
                                    </a>
                                    <a href="#" className="text-sm  hover:text-blue-600 transition-colors">
                                        Electronics
                                    </a>
                                    <a href="#" className="text-sm  hover:text-blue-600 transition-colors">
                                        Home & Living
                                    </a>
                                    <a href="#" className="text-sm  hover:text-blue-600 transition-colors">
                                        Sports
                                    </a>
                                </nav>

                                <Separator />

                                {/* Move Cart and ThemeToggle inside Sheet */}
                                <div className="flex items-center gap-4">
                                    <Button variant="outline" size="icon" className="relative">
                                        <ShoppingCart className="h-5 w-5" />
                                        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                                            2
                                        </Badge>
                                    </Button>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
