const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    const bloodPressureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
            datasets: [
                {
                    label: 'Systolic',
                    data: [120, 118, 160, 120, 150, 158],
                    borderColor: '#C26EB4',
                    backgroundColor: '#d049a5',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Diastolic',
                    data: [110, 64, 110, 90, 70, 78],
                    borderColor: '#7E6CAB',
                    backgroundColor: '#6a3ab2',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 180
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


    const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    const username = 'coalition';
    const password = 'skills-test';
    const base64Credentials = btoa(`${username}:${password}`);
    
    const loadingElement = document.getElementById('loading');
    const dataElement = document.getElementById('data');
    
    loadingElement.style.display = 'block'; 
    
fetch(url, {
  headers: {
    Authorization: `Basic ${base64Credentials}`,
  },
})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      loadingElement.style.display = 'none'; 
      console.log(data[3])
      dataElement.innerText = JSON.stringify(data, null, 2); 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });