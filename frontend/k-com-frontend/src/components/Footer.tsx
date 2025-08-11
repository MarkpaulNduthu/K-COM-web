import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer className="bg-background border-t mt-10">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Brand / About */}
                <div>
                    <h2 className="text-2xl font-bold text-black-700 mb-2">K-COM</h2>
                    <p className="text-sm text-muted-foreground">
                        Your one-stop shop for electronics, fashion and more. We bring quality products to your doorstep.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><Link to='/' className="hover:text-blue-600">Shop</Link></li>
                        <li><Link to='/aboutUs' className="hover:text-blue-600">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                        <li><Link to='/faqs' className="hover:text-blue-600">FAQs</Link></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="font-semibold mb-2">Customer Support</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><Link to="/shipping" className="hover:text-blue-600">Shipping & Delivery</Link></li>
                        <li><Link to="/returns" className="hover:text-blue-600">Returns & Refunds</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link></li>
                        <li><Link to="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="w-full">
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 justify-center">
                        <a href="#" aria-label="Facebook" className="hover:opacity-80">
                            <FiFacebook className="h-5 w-5 text-[#1877F2]" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:opacity-80">
                            <FiTwitter className="h-5 w-5 text-[#1DA1F2]" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:opacity-80">
                            <FiInstagram className="h-5 w-5 text-[#E1306C]" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                            <FiLinkedin className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            {/* Copyright */}
            <div className="container mx-auto px-4 pb-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} K-COM. All rights reserved.
            </div>
        </footer>
    )
}
