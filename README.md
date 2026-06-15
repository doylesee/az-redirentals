## Project Overview
<pre>
<b>Project:</b>   AZ Redirentals
<b>Role:</b>      Web Developer
<b>Tools:</b>     Photoshop, Wordpress, PHP, MySQL, HTML, CSS, JS/jQuery, Foundation
</pre>
&nbsp;<strong><a href="http://doylesee.github.io/az-redirentals/" rel="noopener noreferrer">View project</a></strong>

<p><a href="http://doylesee.github.io/az-redirentals/" rel="noopener noreferrer"><img src="http://doylesee.github.io/az-redirentals/thumbnail.jpg" /></a></p>
<br />

## The Challenge
AZ Redirentals needed a modern, custom WordPress website to launch their brand online. The internal design team created beautiful layouts using Photoshop, but it was my job to turn those these design files into a fully working website. The main challenges included:

**Building a Custom Scrolling Homepage**<br />
The design required the Homepage to be split into distinct, full-screen sections. Visitors additionally had the ability to navigate the page using a vertical "dot" menu fixed on the side of the screen.

**Creating Scroll-Triggered Animations**<br />
To make the site feel alive and interactive, elements inside each section needed to animate and fade into place the exact moment that section appeared on the user's screen.

**Turning Photoshop Files into Custom Code**<br />
Since the design came as Photoshop files, I had to manually extract all images, figure out the column layouts, and code a custom WordPress theme completely from scratch.

**Keeping the Site Responsive and Safe**<br />
The advanced scrolling layout, mobile menus, and interactive maps needed to work perfectly across all screen sizes and web browsers without losing speed.

<br />

## Core Objectives
🟠 **Make Pages Fit Perfectly**<br />
Write a layout script that measures the user's screen height and stretches each section of the Homepage to fit the screen perfectly on all screens.

🟠 **Control the Section Scrolling**<br />
Build a lightweight script that tracks user scrolling and highlights the correct side navigation dot as the user moves down the page.

🟠 **Trigger Animations at the Right Time**<br />
Code a script that watches the scroll position and automatically triggers visual animations exactly when a section comes into view.

🟠 **Ensure It Works Everywhere**<br />
Make sure the interactive mobile menus, contact forms, and maps behave flawlessly on mobile touchscreens, tablet screens, and desktop web browsers.

<br />

## My Approach & Implementation
### 1. Building a Custom WordPress Theme from Photoshop
Instead of using a bulky pre-made theme template that would limit the design, I built a custom WordPress theme completely from scratch paired with the Foundation responsive framework. I opened the Photoshop design files, extracted the graphics, and carefully converted the layouts into clean HTML and CSS code.

Because this was built directly into WordPress using PHP and MySQL, I ensured that the back-end administration area was simple to use. This allowed the client to easily update text, change images, and manage page content without needing to touch any code.

### 2. Engineering Viewport Math & Section Sizing
To guarantee that the full-screen sections on the Homepage looked perfect no matter how large the user's monitor was, I wrote code to dynamically handle the layout size based on the window measurements. This code directly checks the browser window height. If the screen is a standard desktop size, it automatically forces each section to take up the entire viewport, preventing any text or content from getting cut off or looking misplaced.

### 3. Writing the Scroll Tracker & Animation Trigger
To create a high-end experience on the Homepage without using heavy or slow software plugins, I designed an efficient scrolling animation engine:

**Smart Side Dot Navigation**<br />
I created a vertical dot menu fixed to the side of the screen. I wrote a smooth-scrolling script that stops harsh browser jumps. When a user clicks a navigation dot or a menu link, the script takes control and slides the screen down to the exact section target over a smooth 1-second curve.

**On-Focus Visual Animations**<br />
Instead of loading all animations at once, the website waits for the user to scroll. As the user moves down the page, a scroll listener constantly monitors the screen's position. The exact millisecond a section or image card is scrolled into view, the script instantly applies an `.active` class to trigger the CSS visual animations.

### 4. Smart Navigation & Maps Integration
To ensure the features on the About and Contact pages worked smoothly, I integrated several custom behaviors:

**Mobile Menu Adaptations**<br />
To stop the main header menu from taking up too much screen space on smaller devices, I wired the links into SlickNav. This automatically collapses the desktop menu into a clean, thumb-friendly mobile hamburger icon.

**Sticky Header Control**<br />
I coded a scrolling detector that monitors the top menu position. The moment a user scrolls down past the main banner area, the script injects a .sticky class to lock the navigation bar to the top of the browser screen so it is always accessible.

**User-Friendly Contact Maps**<br />
On the Contact page, standard embedded maps can accidentally capture a user's mouse wheel, making the page lock up when they try to scroll down. I wrote an interaction toggle script to solve this:
<pre>
// Disable map zoom scrolling automatically on page load
$('.google-map iframe').addClass('scrolloff');

// Turn map zooming back on ONLY when a user intentionally clicks on the map
$('.google-map').on('click', function () {
    $('.google-map iframe').removeClass('scrolloff');
});

// Re-disable map zooming the second the user's mouse leaves the map area
$('.google-map iframe').mouseleave(function () {
    $('.google-map iframe').addClass('scrolloff');
});
</pre>

### 5. Quality Assurance and Speed Management
Because heavy images and animations can cause a website to lag, I focused heavily on optimization and performance:

**Loading Screen Guard**<br />
To prevent visitors from seeing brief unstyled content or layout shifts while the server loaded large images, I wrapped the site in a global container. The page remains hidden until everything is fully downloaded, fading out smoothly only when the browser is completely ready.

**Responsive Layouts Everywhere**<br />
I wrote custom styling rules to change the layout on small mobile screens. On phones where a strict full-screen section design would cramp the text, the site automatically adjusts into a normal, continuous layout so everything is easy to read.

<br />

## Results & Impact
✅ **Flawless Design Translation**<br />
Successfully turned Photoshop files into a custom, highly responsive, and interactive WordPress platform that perfectly mirrored the design team's creative goal.

✅ **Lightweight Codebase**<br />
Completely avoided bulky third-party scrolling and animation modules by writing custom, lightweight jQuery scripts from scratch.

✅ **Great Mobile Experience**<br />
Delivered an interactive experience that works beautifully across all devices, transforming advanced desktop features into fast, easy-to-use mobile components.

✅ **Easy Content Management**<br />
Provided the client with a secure, custom back-end WordPress system, making it simple for their non-technical team to manage content without breaking the layouts.

<br /><strong><a href="http://doylesee.github.io/az-redirentals/" rel="noopener noreferrer">View project</a></strong>
