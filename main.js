<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Miracle Aneke, Official website of Miracle Aneke - Ghanaian-Nigerian blogger, science educator, entrepreneur, and founder of Four Smart Brothers Ltd">
    <meta name="keywords" content="Miracle Aneke, Ghanaian entrepreneur, Ghanaian blogger, science educator, web developer, fashion designing, logistics, Agriculture, real estate">
    <meta name="author" content="Miracle Aneke">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="Miracle Aneke | Official Website">
    <meta property="og:description" content="Official website of Miracle Aneke - Ghanaian-Nigerian blogger, science educator, entrepreneur">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://miracle-aneke.online">
    <meta property="og:image" content="https://miracle-aneke.online/images/miracle-aneke.jpg">
    <title>Miracle Aneke | Official Website</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="index.html" class="logo-container">
                <img src="miraclelogo.jpg" alt="Miracle Aneke Logo" class="logo">
                <span class="logo-text">Miracle Aneke</span>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="desktop-nav">
                <ul>
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="education.html">Education</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="donate.html">Donate</a></li>
                </ul>
            </nav>
            
            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <!-- Mobile Navigation -->
        <nav class="mobile-nav">
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About Me</a></li>
                <li><a href="education.html">Education</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="donate.html">Donate</a></li>
            </ul>
        </nav>
        
        <!-- Overlay -->
        <div class="overlay"></div>
    </header>

    <section class="hero">
        <div class="container hero-content">
            <h1>Miracle Aneke</h1>
            <h2>Blogger | Educator | Entrepreneur</h2>
            <p>Founder of Four Smart Brothers Ltd - Web Development, Fashion Designing, Logistics, Agriculture, Real Estate Assistance</p>
            <div class="social-icons">
                <a href="https://facebook.com/miracleaneke.0" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/miracleanek_e" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/miracleaneke" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/mi.racle_17" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://gravatar.com/miracleaneke91" aria-label="Gravatar"><i class="fab fa-gravatar"></i></a>
            </div>
        </div>
    </section>

    <section class="services section-padding">
        <div class="container">
            <h2 class="section-title">Four Smart Brothers Ltd Services</h2>
            <div class="services-grid">
                <div class="service-item">
                    <i class="fas fa-laptop-code"></i>
                    <h3>Web Development</h3>
                    <p>Professional website design and development services</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-tshirt"></i>
                    <h3>Fashion Designing</h3>
                    <p>Custom clothing and fashion solutions</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-truck"></i>
                    <h3>Logistics</h3>
                    <p>Efficient transportation and delivery services</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-tractor"></i>
                    <h3>Agriculture</h3>
                    <p>Agricultural consulting and solutions</p>
                </div>
                <div class="service-item">
                    <i class="fas fa-home"></i>
                    <h3>Real Estate Assistance</h3>
                    <p>Property assistance and management</p>
                </div>
            </div>
        </div>
    </section>

    <section class="latest-blog section-padding">
        <div class="container">
            <h2 class="section-title">Latest Blog Posts</h2>
            <div class="blog-posts">
                <!-- Blog posts will be loaded via JavaScript -->
            </div>
            <iframe src="https://miracleaneke.substack.com/embed" width="100%" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="miraclelogo.jpg" alt="Miracle Aneke Logo">
                </div>
                <nav class="footer-nav">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="education.html">Education</a>
                    <a href="contact.html">Contact</a>
                    <a href="donate.html">Donate</a>
                </nav>
                <div class="footer-links">
                    <a href="privacy.html">Privacy Policy</a>
                    <span class="footer-divider">|</span>
                    <a href="terms.html">Terms of Service</a>
                </div>
                <div class="copyright">
                    <p>&copy; <span id="year"></span> Miracle Aneke. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
