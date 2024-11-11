function updateClock() {
    const now = new Date();

    // Hours, minutes and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Time for AM/PM format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Date (Month, Day, Year)
    const day = now.getDate();
    const month = monthNames[now.getMonth()]; // Ay ismini alıyoruz
    const year = now.getFullYear();

    // We add current data to HTML elements
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("am-pm").textContent = ampm;
    document.getElementById("date").textContent = `${month} ${day}, ${year}`;

    // Change `pm` id to AM/PM status
    const mainSec = document.getElementById('pm');

    if (ampm === 'PM') {
        // If there is a PM ID while PM, we delete it and add the AM ID.
        mainSec.id = 'pm';
        document.getElementById('sun-moon-icon').src = '../assets/img/moon.svg'; // Ay ikonu
    } else {
        // If there is an AM ID while AM, we delete it and add the PM ID.
        mainSec.id = 'am';
        document.getElementById('sun-moon-icon').src = '../assets/img/sun.svg'; // Güneş ikonu
    }
}
setInterval(updateClock, 1000);
updateClock();
