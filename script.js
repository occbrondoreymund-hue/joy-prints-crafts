
  const products = [
    {
      id: 1,
      name: "Sakura Letter Set",
      category: "stationery",
      description: "Japanese imported art paper, soft cherry blossom pink with gold foil. Includes 10 sheets + 5 envelopes.",
      icon: "🖼️",
    },
    {
      id: 2,
      name: "Acrylic Photo Print",
      category: "photo",
      description: "High-definition double-sided printing, crystal clear finish. Comes with an adorable mini stand.",
      icon: "🖼️",
    },
    {
      id: 3,
      name: "Macaron Sticky Notes",
      category: "stationery",
      description: "Three-color inner pages, tearable design, soft pastel cover for daily jottings.",
      icon: "🖼️",

    },
    {
      id: 4,
      name: "Polaroid Style Prints",
      category: "photo",
      description: "Vintage white or pink border available. Each photo becomes a little memory. Set of 6.",
      icon: "🖼️",
    },
    {
      id: 5,
      name: "Pink Art Poster",
      category: "poster",
      description: "Watercolor florals / abstract sweet series. A2 size, matte paper, includes poster tube.",
      icon: "🖼️",
    },
    {
      id: 6,
      name: "Handmade Pop-up Card",
      category: "cards",
      description: "Handcrafted 3D pop-up surprise, customizable message inside. Perfect for birthdays or anniversaries.",
      icon: "🖼️",
    },
    {
      id: 7,
      name: "Textured Postcard Set",
      category: "cards",
      description: "8 unique designs, cotton paper texture with hand-drawn romantic style.",
      icon: "🖼️",
    },
    {
      id: 8,
      name: "Wall Art Print",
      category: "poster",
      description: "Nordic minimalist pink illustrations, perfect for modern interiors. Framing service available.",
      icon: "🖼️",
    },
    {
      id: 9,
      name: "Cute Sticker Pack",
      category: "stationery",
      description: "Waterproof PET stickers. 20 mixed designs including desserts, animals, and journal elements.",
      icon: "🖼️",
    },
    {
      id: 10,
      name: "Polaroid Photo Album",
      category: "photo",
      description: "Self-adhesive corners, holds up to 40 polaroids. Moisture-resistant cover with embroidered design.",
      icon: "🖼️",
    },
    {
      id: 11,
      name: "Starry Invitation Card",
      category: "cards",
      description: "Shimmering starry sky theme, fold-out design. Great for parties/gatherings, personalized names available.",
      icon: "🖼️",
    },
    {
      id: 12,
      name: "Hand-drawn Wall Calendar",
      category: "poster",
      description: "2026 pink-themed calendar, each month features a different治愈 illustration. Mark special dates!",
      icon: "🖼️",
    }
  ];

  // get container
  const productsGrid = document.getElementById('productsGrid');
  let currentFilter = 'all';

  // Helper: render products based on filter
  function renderProducts() {
    const filtered = currentFilter === 'all' 
      ? products 
      : products.filter(p => p.category === currentFilter);
    
    if (filtered.length === 0) {
      productsGrid.innerHTML = `<div class="no-products"><i class="fas fa-cloud-moon" style="font-size: 2rem; margin-bottom: 0.8rem; display: block;"></i> No cuties found~ Try another category 💖</div>`;
      return;
    }
    
    // Build grid with animation delay
    productsGrid.innerHTML = filtered.map((product, idx) => `
      <div class="product-card" style="--index: ${idx % 12};">
        <div class="card-img">
          <i class="fas ${getIconClass(product.icon)}" style="font-size: 3.2rem;"></i> 
          <span style="margin-left: 8px; font-size: 2rem;">${product.icon}</span>
        </div>
        <div class="card-content">
          <div class="product-title">
            <span>${product.name}</span>
            <span class="badge">${getCategoryLabel(product.category)}</span>
          </div>
          <div class="product-desc">${product.description}</div>
          <div class="price-row">
          </div>
        </div>
      </div>
    `).join('');

    // attach event listeners to all order buttons after render
    document.querySelectorAll('.order-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productName = btn.getAttribute('data-name');
        showCustomToast(productName);
      });
    });
  }

  // map simple icons to FontAwesome (just for fun and fallback)
  function getIconClass(emojiOrIcon) {
    if (emojiOrIcon === '🌸') return 'fa-seedling';
    if (emojiOrIcon === '🖼️') return 'fa-image';
    if (emojiOrIcon === '📒') return 'fa-book-open';
    if (emojiOrIcon === '📸') return 'fa-camera';
    if (emojiOrIcon === '🎨') return 'fa-palette';
    if (emojiOrIcon === '💌') return 'fa-heart';
    if (emojiOrIcon === '✨') return 'fa-star';
    if (emojiOrIcon === '🖌️') return 'fa-paintbrush';
    if (emojiOrIcon === '🍰') return 'fa-cake-candles';
    if (emojiOrIcon === '📓') return 'fa-notebook';
    if (emojiOrIcon === '🌙') return 'fa-moon';
    if (emojiOrIcon === '📅') return 'fa-calendar-alt';
    return 'fa-pen-fancy';
  }

  function getCategoryLabel(cat) {
    const map = {
      stationery: 'Stationery',
      poster: 'Art Poster',
      photo: 'Photo Print',
      cards: 'Greeting Card'
    };
    return map[cat] || 'Custom';
  }

  // simple toast notification - pink & girly
  function showCustomToast(productName) {
    // remove existing toast if any
    const existingToast = document.querySelector('.girly-toast');
    if(existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'girly-toast';
    toast.innerHTML = `
      <div style="background: #ffffffcc; backdrop-filter: blur(12px); border-radius: 100px; padding: 12px 20px; box-shadow: 0 12px 24px rgba(231,84,128,0.2); display: flex; align-items: center; gap: 12px; border: 1px solid #ffc0db;">
        <i class="fas fa-check-circle" style="color:#f36bae; font-size: 1.4rem;"></i>
        <span style="font-weight:500; color:#a5446b;">✨ ${productName} added to custom list ✨<br><small style="font-size:0.7rem;">Our team will reach out soon 💌</small></span>
        <button class="toast-close" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:#e75480;">&times;</button>
      </div>
    `;
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = '1000';
    toast.style.fontSize = '0.9rem';
    toast.style.minWidth = '280px';
    toast.style.textAlign = 'center';
    document.body.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    const closeToast = () => { if(toast) toast.remove(); };
    closeBtn.addEventListener('click', closeToast);
    setTimeout(closeToast, 4000);
  }

  // ********** FILTER LOGIC **********
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');
        if(!filterValue) return;
        // update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = filterValue;
        renderProducts();
        // scroll a little to grid for better UX
        productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // set title and enhance vibe
  function enhancePinkVibe() {
    document.title = "Joy Prints & Crafts";
  }

  // initial render
  renderProducts();
  initFilters();
  enhancePinkVibe();

  // additional styles for toast and misc
  const style = document.createElement('style');
  style.textContent = `
    .girly-toast {
      animation: fadeUp 0.25s ease-out;
      font-family: 'Inter', sans-serif;
    }
    @keyframes fadeOutToast {
      to { opacity: 0; transform: translateX(-50%) translateY(10px); visibility: hidden; }
    }
    .girly-toast button.toast-close {
      background: #ffe7f0;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.1s;
    }
    .girly-toast button.toast-close:hover {
      background: #f36bae;
      color: white;
    }
    .product-card .order-btn:active {
      transform: scale(0.94);
    }
    ::selection {
      background: #ffc0db;
      color: #b3416e;
    }
  `;
  document.head.appendChild(style);
