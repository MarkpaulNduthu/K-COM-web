import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
}

const SearchResults: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) return;

        setLoading(true);
        fetch(`/api/products/search?q=${encodeURIComponent(query)}`)
            .then((res) => res.json())
            .then((data) => setResults(data))
            .catch((err) => console.error("Search error:", err))
            .finally(() => setLoading(false));
    }, [query]);

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-12">

                <h1 className="text-2xl font-semibold mb-4">
                    Search Results for "{query}"
                </h1>
                {loading && <p>Loading...</p>}
                {!loading && results.length === 0 && <p>No results found.</p>}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {results.map((product) => (
                        <div key={product.id} className="border rounded p-4 shadow-sm">
                            <img src={product.image} alt={product.name} className="h-32 object-cover w-full mb-2" />
                            <h2 className="font-medium">{product.name}</h2>
                            <p className="text-blue-600 font-semibold">Ksh {product.price}</p>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default SearchResults;
