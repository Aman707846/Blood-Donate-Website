

document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.btn-view');
    const rescheduleButton = document.querySelector('.btn-reschedule');

    // View Donation Details
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const date = row.querySelector('td:first-child').textContent;
            const location = row.querySelector('td:nth-child(2)').textContent;
            const bloodType = row.querySelector('td:nth-child(3)').textContent;
            const status = row.querySelector('.badge').textContent;

            // Create a modal or alert with donation details
            const detailsHTML = `
                Donation Details:
                - Date: ${date}
                - Location: ${location}
                - Blood Type: ${bloodType}
                - Status: ${status}
            `;

            alert(detailsHTML);
        });
    });

    // Reschedule Upcoming Donation
    if (rescheduleButton) {
        rescheduleButton.addEventListener('click', () => {
            // Redirect to donation scheduling page
            window.location.href = 'donate-blood.html';
        });
    }

    // Optional: Filter or Sort Donation History
    function setupTableSorting() {
        const table = document.querySelector('.donation-table');
        const headers = table.querySelectorAll('thead th');

        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                const rows = Array.from(table.querySelectorAll('tbody tr'));
                const sortedRows = rows.sort((a, b) => {
                    const aText = a.querySelector(`td:nth-child(${index + 1})`).textContent;
                    const bText = b.querySelector(`td:nth-child(${index + 1})`).textContent;
                    return aText.localeCompare(bText);
                });

                // Clear existing rows and append sorted rows
                const tbody = table.querySelector('tbody');
                tbody.innerHTML = '';
                sortedRows.forEach(row => tbody.appendChild(row));
            });
        });
    }

    setupTableSorting();
});
