// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Services Data
const services = [
    {
        imagePath: 'ai.png',
        title: 'Research & Development',
        description: 'Conducting research on cutting-edge technologies in AI, Machine Learning, and Computer Vision.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        imagePath: 'java.png',
        title: 'JAVA Development',
        description: 'Developing efficient and scalable applications using Java, focusing on robust backend logic.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        imagePath: 'web.png',
        title: 'Frontend Development',
        description: 'Building responsive and user-friendly web interfaces using modern frontend technologies.',
        gradient: 'from-green-500 to-teal-500'
    },
    {
        imagePath: 'blog.png',
        title: 'Blogger Customization',
        description: 'Creating customized and visually appealing blogs on Blogger by modifying templates.',
        gradient: 'from-orange-500 to-yellow-500'
    }
];

// Render Services
const servicesGrid = document.querySelector('.services-grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <div class="mb-4">
            <img src="${service.imagePath}" alt="${service.title}" class="w-16 h-16 object-cover rounded">
        </div>
        <h3 class="text-xl font-semibold mb-2 gradient-text">${service.title}</h3>
        <p class="text-gray-400">${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
});

// Skills Data
const skills = [
    { name: "Computer Programming", level: 95 },
    { name: "Deep Learning", level: 85 },
    { name: "Web Development", level: 85 },
    { name: "C++", level: 50 },
    { name: "Java", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "WordPress", level: 85 },
    { name: "Theory Of Computation", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "Problem Solving", level: 95 }
];

// Render Skills
const skillsContainer = document.querySelector('.skills-container');
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <div class="skill-info">
            <span class="font-medium">${skill.name}</span>
            <span>${skill.level}%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `;
    skillsContainer.appendChild(skillItem);
});

// Education Data
const education = [
    {
        school: "Shah Abdul Latif University, Khairpur",
        period: "2024 - Present",
        details: "Currently pursuing a degree in Computer Science. Now I am in 2nd Semester."
    },
    {
        school: "Govt. Superior Science College Khairpur Mir's",
        period: "2022 - 2024",
        details: "Pre-Engineering with 80.18%"
    },
    {
        school: "READ Schooling System Ghulam Goth, UC Sangrar",
        period: "2020 - 2022",
        details: "Matriculation with 81.63%"
    },
    {
        school: "GBPS Jeand Khan Mangrio",
        period: "2012 - 2017",
        details: "Primary (Class 1-5)"
    }
    
];

// Render Education Timeline
const educationTimeline = document.querySelector('#education .timeline');
education.forEach(edu => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3 class="gradient-text">${edu.school}</h3>
            <div class="timeline-location">
                <i class='bx bx-calendar'></i>
                <span>${edu.period}</span>
            </div>
            <p>${edu.details}</p>
        </div>
    `;
    educationTimeline.appendChild(timelineItem);
});

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const level = bar.dataset.level;
                bar.style.width = `${level}%`;
            });
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.skills-container'));

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
