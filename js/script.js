 // Translations for different languages
 const translations = {
    English: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        testimonials: 'Testimonials',
        portfolio: 'Portfolio',
        contact: 'Contact',
        welcomeTitle: 'Welcome To',
        companyName: 'Yourcompanyname',
        teamsTitle: 'Our Teams Are Here',
        teamsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        teamMembers: [
            { name: 'Hugo Silva', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Imanol Arias', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Javier Bardem', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' }
        ],
        copyright: 'Copyright &copy; <span id="copyright-year">2019</span>. Yourcompanyname All right reserved'
    },
    French: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        testimonials: 'Témoignages',
        portfolio: 'Portfolio',
        contact: 'Contact',
        welcomeTitle: 'Bienvenue à',
        companyName: 'VotreNomDeSociété',
        teamsTitle: 'Nos équipes sont là',
        teamsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        teamMembers: [
            { name: 'Hugo Silva', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Imanol Arias', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Javier Bardem', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' }
        ],
        copyright: 'Droits d\'auteur &copy; <span id="copyright-year">2019</span>. VotreNomDeSociété Tous droits réservés'
    },
    German: {
        home: 'Startseite',
        about: 'Über uns',
        services: 'Dienstleistungen',
        testimonials: 'Kundenbewertungen',
        portfolio: 'Portfolio',
        contact: 'Kontakt',
        welcomeTitle: 'Willkommen bei',
        companyName: 'IhrFirmenname',
        teamsTitle: 'Unsere Teams sind hier',
        teamsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        teamMembers: [
            { name: 'Hugo Silva', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Imanol Arias', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Javier Bardem', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' }
        ],
        copyright: 'Urheberrecht &copy; <span id="copyright-year">2019</span>. IhrFirmenname Alle Rechte vorbehalten'
    },
    Italian: {
        home: 'Home',
        about: 'Chi siamo',
        services: 'Servizi',
        testimonials: 'Testimonianze',
        portfolio: 'Portfolio',
        contact: 'Contatti',
        welcomeTitle: 'Benvenuto su',
        companyName: 'IlTuoNomeAziendale',
        teamsTitle: 'I nostri team sono qui',
        teamsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        teamMembers: [
            { name: 'Hugo Silva', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Imanol Arias', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' },
            { name: 'Javier Bardem', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore' }
        ],
        copyright: 'Copyright &copy; <span id="copyright-year">2019</span>. IlTuoNomeAziendale Tutti i diritti riservati'
    }
};

// Function to change language
function changeLanguage() {
    const selectedLanguage = document.getElementById('language').value;

    // Update navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach((link, index) => {
        link.textContent = translations[selectedLanguage][Object.keys(translations.English)[index]];
    });

    // Update hero section
    document.querySelector('.hero-title').textContent = translations[selectedLanguage].welcomeTitle;
    document.querySelector('.hero-description').textContent = translations[selectedLanguage].companyName;

    // Update section 1 content
    document.querySelector('.section-title').textContent = translations[selectedLanguage].teamsTitle;
    document.querySelector('.section-description').textContent = translations[selectedLanguage].teamsDescription;

    // Update team details
    const teamMembers = document.querySelectorAll('.team-details .col-sm-4');
    teamMembers.forEach((element, index) => {
        const memberData = translations[selectedLanguage].teamMembers[index];
        element.querySelector('h1').textContent = memberData.name;
        element.querySelector('p').textContent = memberData.description;
    });

    // Update footer
    const copyrightYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = copyrightYear;
    document.querySelector('footer').innerHTML = translations[selectedLanguage].copyright;
}


// Event listener for language change
document.getElementById('language').addEventListener('change', changeLanguage);

// Initial language setup (optional)
changeLanguage();