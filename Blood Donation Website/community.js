document.addEventListener('DOMContentLoaded', () => {
    const createPostBtn = document.querySelector('.btn-create-post');
    const feedFilter = document.getElementById('feedFilter');
    const posts = document.querySelectorAll('.post');
    const eventJoinButtons = document.querySelectorAll('.btn-join');
    const eventDetailsButtons = document.querySelectorAll('.btn-details');

    // Post Creation (Simulated)
    createPostBtn.addEventListener('click', () => {
        alert('Create Post functionality will be implemented in a future update.');
    });

    // Feed Filtering
    feedFilter.addEventListener('change', (e) => {
        const selectedFilter = e.target.value;

        posts.forEach(post => {
            if (selectedFilter === 'all' || post.dataset.type === selectedFilter) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    // Post Interaction Buttons
    const postActionButtons = document.querySelectorAll('.post-actions button');
    postActionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const actionType = e.currentTarget.querySelector('i').classList[1].replace('fa-', '');
            
            switch(actionType) {
                case 'heart':
                    alert('Liked the post!');
                    break;
                case 'comment':
                    alert('Comment section will be available in a future update.');
                    break;
                case 'share':
                    alert('Share functionality will be implemented in a future update.');
                    break;
            }
        });
    });

    // Event Join and Details
    eventJoinButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const eventTitle = e.target.closest('.event-card').querySelector('h3').textContent;
            alert(`You are now registered for the event: ${eventTitle}`);
        });
    });

    eventDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const eventTitle = e.target.closest('.event-card').querySelector('h3').textContent;
            const eventLocation = e.target.closest('.event-card').querySelector('p').textContent;
            
            const detailsHTML = `
                Event Details:
                - Title: ${eventTitle}
                - Location: ${eventLocation}
                - More details coming soon!
            `;

            alert(detailsHTML);
        });
    });
});
