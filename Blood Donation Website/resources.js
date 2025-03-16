document.addEventListener('DOMContentLoaded', () => {
    const categoryTabs = document.querySelectorAll('.category-tabs button');
    const resourceCards = document.querySelectorAll('.resource-card');
    const resourceSearch = document.getElementById('resourceSearch');
    const viewResourceButtons = document.querySelectorAll('.btn-view-resource');
    const featuredButtons = document.querySelectorAll('.featured-card button');

    // Category Filtering
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.dataset.category;

            resourceCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Resource Search
    resourceSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        resourceCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // View Resource Details
    viewResourceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.resource-card');
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;

            alert(`Resource Details:\n\nTitle: ${title}\nDescription: ${description}\n\nFull details coming soon!`);
        });
    });

    // Featured Resource Interactions
    featuredButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent;
            
            switch(buttonText) {
                case 'Register Now':
                    alert('Webinar registration form will be available soon.');
                    break;
                case 'Download PDF':
                    alert('Donor handbook PDF download will be available soon.');
                    break;
            }
        });
    });
});
