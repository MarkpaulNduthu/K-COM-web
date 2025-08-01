import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { type Product } from "@/types/Product";
import { type Review } from "@/types/Review";



type ProductModalProps = {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
};


const mockReviews: Review[] = [
    {
        author: "Jane Doe",
        comment: "Great quality and fast delivery!",
        rating: 5,
    },
    {
        author: "John Smith",
        comment: "Product matched the description. Satisfied.",
        rating: 4,
    },
];

export const ProductModal: FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    if (!product) return null;

    const [showAllReviews, setShowAllReviews] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-background rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl relative"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-2 right-2  hover:text-black">&times;</button>

                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className=" mb-2">{product.description}</p>
                        <p className="font-semibold mb-2">{product.price}</p>

                        <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: 5 }, (_, idx) => (
                                <Star
                                    key={idx}
                                    size={16}
                                    className={idx < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                />
                            ))}
                        </div>

                        <Badge variant={product.stock ? "default" : "destructive"} className="mb-4">
                            {product.stock ? "In Stock" : "Out of Stock"}
                        </Badge>

                        <div className="w-full mt-4 flex flex-col gap-2">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Buy Now</Button>
                            <Button className="w-full bg-blue-600">Add to Cart</Button>
                        </div>

                        {/* Optional: Add a reviews section here */}
                        {/* Reviews Section */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>

                            {/* Reviews Container */}
                            <div className={`space-y-4 ${showAllReviews ? 'max-h-[400px]' : 'max-h-28'} overflow-y-auto pr-1 transition-all duration-300`}>
                                {(showAllReviews ? mockReviews : mockReviews.slice(0, 1)).map((review, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                                        <p className="text-sm font-medium">{review.author}</p>
                                        <div className="flex items-center gap-1 my-1">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Toggle Button */}
                            <div className="mt-3">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => setShowAllReviews(prev => !prev)}
                                >
                                    {showAllReviews ? "Hide Reviews" : "Show All Reviews"}
                                </Button>
                            </div>
                        </div>


                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
