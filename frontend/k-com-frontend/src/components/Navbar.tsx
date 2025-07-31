import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "./ThemeToggle"
import { ShoppingCart, Menu, Search } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


interface Product {
    id: number;
    name: string;
}


export function Navbar() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();


    // Debounce logic
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim().length > 1) {
                fetch(`/api/products/suggest?q=${encodeURIComponent(query)}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setSuggestions(data);
                        setShowSuggestions(true);
                    })
                    .catch(() => setSuggestions([]));
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        }, 400); // Wait 400ms after user stops typing

        return () => clearTimeout(delayDebounce);
    }, [query]);


    const handleSearch = () => {
        if (!query.trim()) return;
        navigate(`/search?q=${encodeURIComponent(query)}`);
        setShowSuggestions(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className=" w-full md:w-auto bg-background dark:bg-gray-900 sticky top-0 z-50 rounded-b-lg shadow-md">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 px-4 py-2">
                {/* Logo */}
                <nav className="shrink-0">
                    <Link to="/" className="flex items-center gap-1 text-lg font-semibold font-poppins">
                        <img src="images/k-com-icon.png" alt="K-COM Logo" className="h-10 w-10 object-contain rounded-full" />
                        K-COM
                    </Link>
                </nav>
                <div className="relative max-w-[180px] sm:max-w-sm w-full">
                    {/* Search Bar */}
                    <Input
                        type="text"
                        placeholder="Search products..."
                        //className="max-w-[180px] sm:max-w-sm w-full"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => query.length > 1 && setShowSuggestions(true)}
                        className="pr-10"
                    />

                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={handleSearch}
                        className="absolute right-0 top-0 bottom-0"
                    >
                        <Search className="h-5 w-5 text-gray-500" />
                    </Button>

                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-900 border border-gray-200 rounded shadow z-50 max-h-60 overflow-y-auto">
                            {suggestions.map((product) => (
                                <div
                                    key={product.id}
                                    className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                                    onClick={() => {
                                        navigate(`/search?q=${encodeURIComponent(product.name)}`);
                                        setQuery(product.name);
                                        setShowSuggestions(false);
                                    }}
                                >
                                    {product.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">

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
                    <Link to="/cart">
                        <Button variant="outline" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                                2
                            </Badge>
                        </Button>
                    </Link>


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
                                    <Link to="/cart">
                                        <Button variant="outline" size="icon" className="relative">
                                            <ShoppingCart className="h-5 w-5" />
                                            <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                                                2
                                            </Badge>
                                        </Button>
                                    </Link>

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
