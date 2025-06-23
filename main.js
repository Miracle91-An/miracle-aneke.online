// Current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Load blog posts
const blogPostsContainer = document.querySelector('.blog-posts');
if (blogPostsContainer) {
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
    
    let blogHTML = '';
    blogPosts.forEach(post => {
        blogHTML += `
            <div class="blog-post">
                <h3>${post.title}</h3>
                <p class="post-date">${post.date}</p>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Read More</a>
            </div>
        `;
    });
    
    blogPostsContainer.innerHTML = blogHTML;
}

// Testimonials slider
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
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
            author: "Michael Aneke Chibuke ",
            role: "The Great Word MInistry International,Youth Coordinator"
        }
    ];
    
    let testimonialHTML = '';
    testimonials.forEach(testimonial => {
        testimonialHTML += `
            <div class="testimonial">
                <blockquote>"${testimonial.quote}"</blockquote>
                <div class="testimonial-author">
                    <strong>${testimonial.author}</strong>
                    <span>${testimonial.role}</span>
                </div>
            </div>
        `;
    });
    
    testimonialSlider.innerHTML = testimonialHTML;
}

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        let valid = true;
        const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// Donation form handling
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const method = this.donationMethod.value;
        let message = 'Thank you for your donation! ';
        
        switch(method) {
            case 'paypal':
                message += 'You will be redirected to PayPal to complete your donation.';
                window.location.href = 'https://www.paypal.com';
                break;
            case 'bank':
                message += 'Please use the bank details provided on this page.';
                alert(message);
                break;
            case 'mobile':
                message += 'Please use the mobile money details provided on this page.';
                alert(message);
                break;
        
            default:
                alert('Please select a payment method.');
                return;
        }
    });
}