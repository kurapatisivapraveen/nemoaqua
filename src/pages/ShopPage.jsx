import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Check
} from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS } from '../data/productsData';
import { CATEGORIES } from '../data/categoriesData';
import { STORE_CONFIG } from '../config/storeConfig';
import './ShopPage.css';

const ITEMS_PER_PAGE = 12;

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Query parameter synchronization
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [priceRange, setPriceRange] = useState(30000); // Max default price
  const [selectedAvailability, setSelectedAvailability] = useState('All'); // 'All' | 'In Stock' | 'Limited Stock'
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'rating-desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state if URL query parameters change (e.g., from Navbar search or Footer link)
  useEffect(() => {
    const cat = searchParams.get('category');
    const search = searchParams.get('search');
    if (cat) {
      setSelectedCategory(cat);
    }
    if (search !== null) {
      setSearchQuery(search);
    }
    setCurrentPage(1);
  }, [searchParams]);

  // Handle Category selection
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (categoryName === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryName);
    }
    setSearchParams(newParams);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setPriceRange(30000);
    setSelectedAvailability('All');
    setSortBy('featured');
    setCurrentPage(1);
    setSearchParams({});
  };

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesDesc) {
          return false;
        }
      }
      // Price range filter
      if (product.price > priceRange) {
        return false;
      }
      // Availability filter
      if (selectedAvailability !== 'All' && product.availability !== selectedAvailability) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      // Default: featured first, then bestsellers
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, priceRange, selectedAvailability, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 280, behavior: 'smooth' });
    }
  };

  // Check if any filter is actively applied
  const isFiltered = 
    selectedCategory !== 'All' || 
    searchQuery.trim() !== '' || 
    priceRange < 30000 || 
    selectedAvailability !== 'All';

  return (
    <div className="shop-page page-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">Shop Collection</span>
        </nav>

        {/* Page Header */}
        <div className="shop-header">
          <div className="shop-header-text">
            <h1 className="shop-title">Explore Our Aquarium Collection</h1>
            <p className="shop-subtitle">
              Discover 40+ healthy live fish, low-iron rimless tanks, quiet multi-stage filtration, fish foods, and live plants.
            </p>
          </div>

          {/* Quick Search in Shop Header */}
          <div className="shop-search-bar">
            <Search size={18} className="shop-search-icon" />
            <input
              type="text"
              placeholder="Search products by name or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips Bar (As shown in collection.png) */}
        <div className="category-chips-scroll">
          <button
            className={`category-chip ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => handleCategorySelect('All')}
          >
            <span>All Products (40)</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`category-chip ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat.name)}
            >
              <img src={cat.image} alt={cat.name} className="chip-thumb" />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Controls Bar: Results Count, Mobile Filter Trigger, Sort Options */}
        <div className="shop-controls-bar">
          <div className="results-count-box">
            <button
              className="mobile-filter-toggle-btn"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={18} />
              <span>Filters {isFiltered && '•'}</span>
            </button>
            <span className="results-count">
              Showing <strong>{filteredProducts.length}</strong> of <strong>{PRODUCTS.length}</strong> products
            </span>
          </div>

          <div className="sort-controls">
            <label htmlFor="sort-select" className="sort-label">Sort by:</label>
            <select
              id="sort-select"
              className="sort-dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Customer Rating (High)</option>
            </select>
          </div>
        </div>

        {/* Main Content Layout: Left Sidebar Filters + Product Grid */}
        <div className="shop-layout">
          {/* LEFT SIDEBAR FILTERS (Desktop) */}
          <aside className={`shop-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
            <div className="sidebar-inner">
              <div className="sidebar-header-mobile">
                <h3>Filter Products</h3>
                <button
                  className="close-sidebar-btn"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Reset Filter Button */}
              {isFiltered && (
                <button className="reset-filters-btn" onClick={handleResetFilters}>
                  <RotateCcw size={15} />
                  <span>Clear All Filters</span>
                </button>
              )}

              {/* Filter Section: Categories */}
              <div className="filter-group">
                <h4 className="filter-title">Category</h4>
                <div className="filter-options-list">
                  <label className="filter-radio-item">
                    <input
                      type="radio"
                      name="category-filter"
                      checked={selectedCategory === 'All'}
                      onChange={() => handleCategorySelect('All')}
                    />
                    <span className="radio-label">All Categories</span>
                    <span className="filter-count">40</span>
                  </label>
                  {CATEGORIES.map((cat) => (
                    <label key={cat.id} className="filter-radio-item">
                      <input
                        type="radio"
                        name="category-filter"
                        checked={selectedCategory === cat.name}
                        onChange={() => handleCategorySelect(cat.name)}
                      />
                      <span className="radio-label">{cat.name}</span>
                      <span className="filter-count">{cat.itemCount}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Section: Price Range Slider */}
              <div className="filter-group">
                <div className="filter-title-row">
                  <h4 className="filter-title">Max Price</h4>
                  <span className="price-display-val">
                    {STORE_CONFIG.currency}{priceRange.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="30000"
                  step="200"
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="price-range-slider"
                />
                <div className="price-slider-labels">
                  <span>{STORE_CONFIG.currency}200</span>
                  <span>{STORE_CONFIG.currency}30,000</span>
                </div>
              </div>

              {/* Filter Section: Availability */}
              <div className="filter-group">
                <h4 className="filter-title">Stock Availability</h4>
                <div className="filter-options-list">
                  {[
                    { label: 'All Items', val: 'All' },
                    { label: 'In Stock Only', val: 'In Stock' },
                    { label: 'Limited Stock', val: 'Limited Stock' },
                  ].map((opt) => (
                    <label key={opt.val} className="filter-radio-item">
                      <input
                        type="radio"
                        name="availability-filter"
                        checked={selectedAvailability === opt.val}
                        onChange={() => {
                          setSelectedAvailability(opt.val);
                          setCurrentPage(1);
                        }}
                      />
                      <span className="radio-label">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply / Close button for mobile */}
              <div className="sidebar-footer-mobile">
                <button
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  Apply Filters ({filteredProducts.length} Items)
                </button>
              </div>
            </div>
          </aside>

          {/* Backdrop for mobile sidebar */}
          {isMobileFilterOpen && (
            <div
              className="sidebar-backdrop"
              onClick={() => setIsMobileFilterOpen(false)}
            />
          )}

          {/* RIGHT SIDE: PRODUCT GRID & PAGINATION */}
          <main className="shop-grid-area">
            {paginatedProducts.length > 0 ? (
              <>
                <div className="shop-products-grid">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="pagination-bar">
                    <button
                      className="pagination-btn arrow"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      aria-label="Previous Page"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => {
                      const pageNum = index + 1;
                      return (
                        <button
                          key={pageNum}
                          className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      className="pagination-btn arrow"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      aria-label="Next Page"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="shop-empty-state">
                <div className="empty-icon-circle">
                  <Search size={36} />
                </div>
                <h3>No Matching Aquarium Products</h3>
                <p>
                  We couldn't find any products matching your active filters. Try expanding your search or clearing applied filters.
                </p>
                <button className="btn btn-primary" onClick={handleResetFilters}>
                  <RotateCcw size={16} />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
