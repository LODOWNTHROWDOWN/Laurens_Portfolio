const app = Vue.createApp({
    data() {
        return {
            title: 'Lauren Martin',
            text: 'As an undergraduate, I struggled to find a program that was aligned with my passions and interests. Eventually, I chose Communications, which is what initially exposed me to basic HTML/CSS, igniting what would become a lifelong fascination with web design and development. After graduating and landing a position at Custom Plastic Forming, I was provided the opportunity to exercise my newfound skillset and build web forms. Knowing that HTML/CSS wouldn&rsquo;t be enough to build functioning web forms, I taught myself JavaScript and PHP, which only further amplified my love of web development and solidified my intention to build a career out of it. \n' +
                'Today, I am an experienced Front End Web Developer with 5 years of experience in the industry. As a self-taught developer, I focus on quality and efficiency as a part of my process and am known for creating innovative solutions and picking up new concepts quickly. I have developed online ordering forms from the ground up for a manufacturing company as well as worked with a team to develop new features for ecommerce sites. I also have experience in testing and debugging all layers of web applications from UI, to API. Throughout my career I have focused on improving the projects I work on by expanding capabilities, increasing efficiency, and implementing great UI/UX standards.',
            subheading: 'Technical Proficiencies',
            proficiencies: ['Javascript', 'Vue.js', 'Vue 3', 'PHP', 'Laravel', 'HTML5/CSS', 'Tailwind CSS', 'postgreSQL', 'mySQL', 'JSON']
        }
    }
})
app.mount('#app')