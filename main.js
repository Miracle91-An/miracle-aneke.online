/**
 * Miracle Aneke - Official Website
 * Enhanced Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
  // ==================== UTILITY FUNCTIONS ====================
  const currentYear = () => {
    document.getElementById('year').textContent = new Date().getFullYear();
  };

  // ==================== MOBILE MENU SYSTEM ====================
  const initMobileMenu = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    if (!mobileMenuBtn || !mobileNav || !overlay) return;

    const toggleMenu = () => {
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      mobileMenuBtn.innerHTML = mobileNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking on nav links
    document.querySelectorAll('nav.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileNav.classList.contains('active')) toggleMenu();
      });
    });
  };

  // ==================== SMOOTH SCROLLING ====================
  const initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // ==================== BLOG POSTS ====================
  const loadBlogPosts = () => {
    const blogPostsContainer = document.querySelector('.blog-posts');
    if (!blogPostsContainer) return;

    const blogPosts = [
      {
        title: "How Does A Volcano Erupt?",
        excerpt: "Exploring the science behind volcanic eruptions and their impact on the environment...",
        date: "February 21, 2021",
        link: "https://www967.home.blog"
      },
      {
        title: "How Soil is Formed",
        excerpt: "Understanding the geological processes that shape our planet...",
        date: "October 15, 2020",
        link: "https://www967.home.blog"
      },
      {
        title: "How Does Light travel?",
        excerpt: "A deep dive into the nature of light and its properties...",
        date: "July 13, 2020",
        link: "https://www967.home.blog"
      }
    ];
    
    blogPostsContainer.innerHTML = blogPosts.map((post, index) => `
      <div class="blog-post ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}">
        <h3>${post.title}</h3>
        <p class="post-date">${post.date}</p>
        <p class="post-excerpt">${post.excerpt}</p>
        <a href="${post.link}" class="read-more" target="_blank" rel="noopener">Read More</a>
      </div>
    `).join('');
  };

  // ==================== TESTIMONIALS ====================
  const loadTestimonials = () => {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (!testimonialSlider) return;

    const testimonials = [
      {
        quote: "Miracle's approach to science education is transformative. He makes complex concepts accessible to all students.",
        author: "Dr Nana Kusi Eric",
        role: "Medical Student at KNUST"
      },
      {
        quote: "Four Smart Brothers Ltd provided exceptional web development services for our business. Highly recommended!",
        author: "Kwame Ofori",
        role: "Business Owner, Tech Solutions Ltd"
      },
      {
        quote: "Miracle's workshops on entrepreneurship have inspired many young Africans to start their own businesses.",
        author: "Michael Aneke Chibuke",
        role: "The Great Word Ministry International, Youth Coordinator"
      }
    ];
    
    testimonialSlider.innerHTML = testimonials.map((testimonial, index) => `
      <div class="testimonial ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}">
        <blockquote>"${testimonial.quote}"</blockquote>
        <div class="testimonial-author">
          <strong>${testimonial.author}</strong>
          <span>${testimonial.role}</span>
        </div>
      </div>
    `).join('');
  };

  // ==================== FORM VALIDATION ====================
  const initFormValidation = () => {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
          } else {
            input.style.borderColor = '';
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          alert('Please fill in all required fields.');
        }
      });
    });
  };

  // ==================== DONATION FORM ====================
  const initDonationForm = () => {
    const donationForm = document.getElementById('donationForm');
    if (!donationForm) return;

    donationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const method = this.donationMethod.value;
      const amount = this.donationAmount.value;
      
      if (!method) {
        alert('Please select a payment method.');
        return;
      }

      const messages = {
        paypal: Redirecting to PayPal to complete your donation of $${amount || '--'},
        bank: Please transfer $${amount || '--'} to our bank account details provided.,
        mobile: Please send $${amount || '--'} via mobile money to the number provided.
      };

      if (method === 'paypal') {
        window.location.href = 'https://www.paypal.com';
      } else {
        alert(Thank you for your donation! ${messages[method]});
      }
    });
  };

  // ==================== ANIMATION ON SCROLL ====================
  const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom, .slide-in-center, .fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate(0, 0) scale(1)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      el.style.visibility = 'hidden';
      el.style.opacity = '0';
      el.style.transition = 'all 0.8s ease-out';
      
      if (el.classList.contains('slide-in-left')) {
        el.style.transform = 'translateX(-100px)';
      } else if (el.classList.contains('slide-in-right')) {
        el.style.transform = 'translateX(100px)';
      } else if (el.classList.contains('slide-in-top')) {
        el.style.transform = 'translateY(-100px)';
      } else if (el.classList.contains('slide-in-bottom')) {
        el.style.transform = 'translateY(100px)';
      } else if (el.classList.contains('slide-in-center')) {
        el.style.transform = 'scale(0.8)';
      }
      
      observer.observe(el);
    });
  };

  // ==================== INITIALIZE ALL FUNCTIONS ====================
  currentYear();
  initMobileMenu();
  initSmoothScrolling();
  loadBlogPosts();
  loadTestimonials();
  initFormValidation();
  initDonationForm();
  initScrollAnimations();
});
