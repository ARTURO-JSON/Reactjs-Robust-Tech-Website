import { useState } from 'react'
import { Link } from 'react-router-dom'
import Switch from './Switch'

const products = {
  mobile: {
    apple: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: '₵8,500',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=500&q=80',
        description: 'Latest iPhone with A17 Pro chip'
      },
      {
        id: 2,
        name: 'iPhone 15 Pro',
        price: '₵7,800',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=500&q=80',
        description: 'Pro model with titanium design'
      },
      {
        id: 3,
        name: 'iPhone 15',
        price: '₵6,500',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80',
        description: 'Latest iPhone with Dynamic Island'
      },
      {
        id: 4,
        name: 'iPhone 14 Pro Max',
        price: '₵7,200',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80',
        description: 'Pro Max with A16 Bionic chip'
      },
      {
        id: 5,
        name: 'iPhone 14',
        price: '₵5,800',
        image: 'https://images.unsplash.com/photo-1632661674596-618e45e56c53?auto=format&fit=crop&w=500&q=80',
        description: 'Reliable iPhone with great performance'
      },
      {
        id: 6,
        name: 'iPhone 13',
        price: '₵4,200',
        image: 'https://images.unsplash.com/photo-1632661674596-618e45e56c53?auto=format&fit=crop&w=500&q=80',
        description: 'Popular iPhone model'
      },
    ],
    samsung: [
      {
        id: 1,
        name: 'Samsung Galaxy S24 Ultra',
        price: '₵7,200',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80',
        description: 'Premium Android flagship device'
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24+',
        price: '₵6,500',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80',
        description: 'Large screen flagship phone'
      },
      {
        id: 3,
        name: 'Samsung Galaxy S24',
        price: '₵5,800',
        image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?auto=format&fit=crop&w=500&q=80',
        description: 'Compact flagship smartphone'
      },
      {
        id: 4,
        name: 'Samsung Galaxy A54',
        price: '₵2,400',
        image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?auto=format&fit=crop&w=500&q=80',
        description: 'Mid-range smartphone with excellent features'
      },
      {
        id: 5,
        name: 'Samsung Galaxy A34',
        price: '₵1,800',
        image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?auto=format&fit=crop&w=500&q=80',
        description: 'Affordable mid-range device'
      },
      {
        id: 6,
        name: 'Samsung Galaxy Z Fold 5',
        price: '₵12,000',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80',
        description: 'Foldable smartphone with large display'
      },
    ],
  },
  pc: [
    {
      id: 1,
      name: 'Dell XPS 15',
      price: '₵12,500',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80',
      description: 'Premium laptop for professionals'
    },
    {
      id: 2,
      name: 'HP EliteBook 840',
      price: '₵8,900',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80',
      description: 'Business laptop with great performance'
    },
    {
      id: 3,
      name: 'Lenovo ThinkPad X1 Carbon',
      price: '₵10,200',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80',
      description: 'Ultra-lightweight business laptop'
    },
    {
      id: 4,
      name: 'Acer Aspire 5',
      price: '₵3,800',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80',
      description: 'Affordable laptop for everyday use'
    },
    {
      id: 5,
      name: 'MacBook Pro 14"',
      price: '₵15,000',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80',
      description: 'Apple M3 chip, powerful performance'
    },
    {
      id: 6,
      name: 'Dell Inspiron 15',
      price: '₵4,500',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80',
      description: 'Reliable laptop for students and professionals'
    },
  ],
  accessories: [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      price: '₵450',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=500&q=80',
      description: 'Premium noise-cancelling earbuds'
    },
    {
      id: 2,
      name: 'USB-C Hub',
      price: '₵280',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=80',
      description: 'Multi-port adapter for laptops'
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      price: '₵120',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80',
      description: 'Ergonomic wireless mouse'
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: '₵350',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80',
      description: 'Adjustable aluminum laptop stand'
    },
    {
      id: 5,
      name: 'Phone Case - Premium',
      price: '₵85',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=500&q=80',
      description: 'Protective case with clear design'
    },
    {
      id: 6,
      name: 'Portable Power Bank',
      price: '₵180',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?auto=format&fit=crop&w=500&q=80',
      description: '20000mAh fast charging power bank'
    },
    {
      id: 7,
      name: 'Keyboard - Mechanical',
      price: '₵520',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=500&q=80',
      description: 'RGB mechanical gaming keyboard'
    },
    {
      id: 8,
      name: 'Monitor Stand',
      price: '₵420',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80',
      description: 'Dual monitor stand with cable management'
    },
  ],
}

function ProductCard({ product, isDark }) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isDark ? 'border border-white/10 bg-white/5' : 'border border-slate-200 bg-white'
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {product.name}
        </h3>
        <p className={`mt-1 text-sm ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`text-2xl font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
            {product.price}
          </span>
          <button
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              isDark
                ? 'bg-brand-orange text-white hover:bg-brand-orange/90'
                : 'bg-brand-orange text-white hover:bg-brand-orange/90'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductCatalog({ isDark, setIsDark }) {
  const [activeCategory, setActiveCategory] = useState('mobile')
  const [activeBrand, setActiveBrand] = useState('apple') // For mobile category

  const categories = [
    { id: 'mobile', label: 'Mobile Phones' },
    { id: 'pc', label: 'PCs & Laptops' },
    { id: 'accessories', label: 'Accessories' },
  ]

  const mobileBrands = [
    { id: 'apple', label: 'Apple' },
    { id: 'samsung', label: 'Samsung' },
  ]

  // Get products based on active category and brand
  const getProducts = () => {
    if (activeCategory === 'mobile') {
      return products.mobile[activeBrand] || []
    }
    return products[activeCategory] || []
  }

  // Reset brand to 'apple' when switching away from mobile category
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    if (categoryId !== 'mobile') {
      setActiveBrand('apple') // Reset to default
    }
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Navigation Header */}
      <nav className={`sticky top-0 z-50 border-b backdrop-blur ${isDark ? 'border-white/10 bg-black/60' : 'border-slate-200 bg-white/80'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/multi.png" alt="Multiage Technologies" className="h-16 w-16 object-contain" />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Multiage</p>
              <p className="text-base font-semibold">Technologies</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Switch isDark={isDark} onToggle={setIsDark} />
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${isDark
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
              }`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-4xl font-bold sm:text-5xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Product Catalog
          </h1>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Browse our collection of Mobile Phones, PCs, and Accessories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : isDark
                  ? 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Brand Tabs (only show for mobile category) */}
        {activeCategory === 'mobile' && (
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {mobileBrands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setActiveBrand(brand.id)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeBrand === brand.id
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                    : isDark
                    ? 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {brand.label}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getProducts().map((product) => (
            <ProductCard key={product.id} product={product} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  )
}

