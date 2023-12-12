const header = document.getElementById('main-header');
header.innerHTML = getHeader();

function getHeader() {
    return `
            <!-- SECTION: Navigation -->
            <div id="top" class="container">
                    <nav class="navbar">
                        <a href="index.html" class="nav-branding">LM</a>
                        <ul class="nav-menu">
                            <li class="nav-item">
                                <a href="index.html" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="about.html" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a name="portfolio" href="index.html#portfolio" class="nav-link">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a href="certifications.html" class="nav-link">Certifications</a>
                            </li>
                            <li class="nav-item">
                                <a href="#contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div class="hamburger" onclick="navigation()">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </nav>
                </div>
                <!-- END SECTION: Navigation -->

            `
}

const contact = document.getElementById('contact');
contact.innerHTML = getContact();

function getContact() {
    return `
            <h2 class="contact-heading title">Contact Me</h2>
            <div class="contact_wrapper wrapper-large">
                <div class="contact_visual">
                    <img src="images/contact-visual.png" alt="Lauren Martin's location">
                </div>
                <form class="contact-form" action="https://formspree.io/f/mwkdgyre" method="POST">
                    <input class="contact_form contact_form-name" type="text" name="text" placeholder="Your Name" spellcheck="false">
                    <input class="contact_form contact_form-email" type="email" name="email" placeholder="Your Email" spellcheck="false">
                    <textarea class="contact_form contact_form-message" name="message" placeholder="Your Message"></textarea>
                    <input class="contact_form contact_form-submit" type="submit" value="Send">
                </form>
            </div>
    `
}

const footer = document.getElementById('footer');
footer.innerHTML = getFooter();

function getFooter() {
    return `
            <div class="footer_wrapper wrapper-large">
                <p class="footer_copyright no-margin">&copy; 2023 Lauren Martin</p>
                <a class="footer_logo logo" href="index.html">LM</a>
                <a class="footer_arrow" href="#top">
                    <svg class="footer_arrow-el" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 130 65" xml:space="preserve" enable-background="new 0 0 130 65"><g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"><path d="M315.4 365c-336-305-345-315-290-351 18-12 32-14 45-8 10 5 145 123 300 262l281 253 196-178c108-98 237-215 287-260 50-46 98-83 107-83s27 9 40 19c20 16 22 23 14 46 -12 33-623 585-647 585C638.4 650 489.4 522 315.4 365z"/></g></svg>
                </a>
            </div>
        `
}