import { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Sample products - replace with your actual products
  const products = [
    {
      id: 1,
      title: "Wild Stallion",
      description: "Limited edition print of a wild mustang running free",
      price: 350,
      size: "24x36 inches",
      image: "/images/shop1.jpg",
    },
    {
      id: 2,
      title: "Morning Mist",
      description: "Elegant mare in morning fog, fine art photography print",
      price: 275,
      size: "18x24 inches",
      image: "/images/shop2.jpg",
    },
    {
      id: 3,
      title: "Golden Hour",
      description: "Warm sunset light on thoroughbred in pasture",
      price: 320,
      size: "20x30 inches",
      image: "/images/shop3.jpg",
    },
    {
      id: 4,
      title: "Black Beauty",
      description: "Dramatic black and white portrait of Friesian stallion",
      price: 295,
      size: "16x20 inches",
      image: "/images/shop4.jpg",
    },
    {
      id: 5,
      title: "Foal's First Steps",
      description: "Heartwarming image of newborn foal with mother",
      price: 250,
      size: "12x18 inches",
      image: "/images/shop5.jpg",
    },
    {
      id: 6,
      title: "Dancing Stallions",
      description: "Lipizzaners performing at the Spanish Riding School",
      price: 380,
      size: "24x36 inches",
      image: "/images/shop6.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-cursive text-amber-900 mb-4">Shop</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto">
            Each limited edition print is carefully crafted using
            archival-quality materials to ensure longevity. All prints are
            signed and numbered by the artist.
          </p>
        </div>

        {/* Cart Preview */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-amber-800 text-white p-4 rounded-lg shadow-xl z-50">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>{cart.length} items in cart</span>
              <button className="ml-4 bg-amber-700 hover:bg-amber-600 px-3 py-1 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-amber-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">${product.price}</span>
                  <span className="text-sm text-amber-600">{product.size}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-amber-700 hover:bg-amber-600 text-white py-2 rounded transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Info */}
        <div className="mt-16 bg-amber-100 p-8 rounded-lg">
          <h2 className="text-2xl font-cursive text-amber-800 mb-4">
            Shipping & Policies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Shipping</h3>
              <p className="text-sm">
                Prints are carefully packaged and shipped within 3-5 business
                days. Framing services available upon request (additional
                charges apply).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Returns</h3>
              <p className="text-sm">
                If your print arrives damaged, contact us within 7 days for a
                replacement. Due to the nature of limited edition art, we cannot
                accept returns for change of mind.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">
                Certificates
              </h3>
              <p className="text-sm">
                Each print comes with a signed certificate of authenticity,
                including the edition number and details about the artwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
