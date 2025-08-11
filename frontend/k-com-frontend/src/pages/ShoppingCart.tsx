import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/Navbar";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const initialCart: CartItem[] = [
    {
        id: 1,
        name: "Smart Watch",
        price: 3999,
        quantity: 1,
        image: "/images/smartphone.jpg",
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 2599,
        quantity: 2,
        image: "/images/smartphone.jpg",
    },
];

export default function ShoppingCart() {
    const [cart, setCart] = useState<CartItem[]>(initialCart);
    const shippingFee = 300;

    const updateQuantity = (id: number, amount: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + shippingFee;

    const handleMpesaPayment = () => {
        alert("Initiating M-Pesa payment...");
        // Replace this with actual M-Pesa integration logic
    };

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-10">

                <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Cart Items */}
                        <div className="md:col-span-2 space-y-4">
                            {cart.map(item => (
                                <Card key={item.id} className="flex flex-col md:flex-row items-center gap-4 p-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div className="flex-1 w-full">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-muted-foreground">Ksh {item.price.toLocaleString()}</p>
                                        <div className="flex items-center mt-3 gap-2">
                                            <Button variant="outline" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                                            <Input value={item.quantity} readOnly className="w-12 text-center" />
                                            <Button variant="outline" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-primary">
                                            Ksh {(item.price * item.quantity).toLocaleString()}
                                        </p>
                                        <Button
                                            variant="ghost"
                                            className="text-destructive mt-2"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Summary Card */}
                        <Card className="sticky top-24 h-fit">
                            <CardHeader>
                                <h2 className="text-xl font-bold">Order Summary</h2>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between py-1">
                                    <span>Subtotal</span>
                                    <span>Ksh {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span>Shipping</span>
                                    <span>Ksh {shippingFee}</span>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total</span>
                                    <span>Ksh {total.toLocaleString()}</span>
                                </div>

                                <Button className="w-full mt-6">Proceed to Checkout</Button>
                                <Button
                                    className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white"
                                    onClick={handleMpesaPayment}
                                >
                                    Pay with M-Pesa
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </>
    );
}
