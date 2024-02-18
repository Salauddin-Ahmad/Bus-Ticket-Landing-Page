
let totalSeatsAvailable = parseInt(document.querySelector('#seats-left').innerText);
const seats = document.querySelectorAll('.seat');
let seatsSelectedDisplay = parseInt(document.querySelector('#selected-seat-count').innerText);
// console.log(seatsSelectedDisplay);

// div id of seat
let seatNameDiplsay = document.getElementById('seat-name')
let seatClassDiplsay = document.getElementById('Seat-class')
let seatPiceDiplsay = document.getElementById('seat-price')

const maxSeats = 4;
let seatsSelected = 0;

seats.forEach(seat => {
  seat.addEventListener('click', () => {

    if (seat.classList.contains('selected')) {

      seat.classList.remove('selected');
      seat.style.backgroundColor = '';

      seatsSelected--;

      totalSeatsAvailable++;
    } else {

      if (seatsSelected >= maxSeats) {
        alert('Max seats booked!');
        return;
      }
      seat.classList.add('selected');
      seat.style.backgroundColor = 'green';
      seatsSelected++;
      totalSeatsAvailable--;

      // create seat and display seat name and class and price
      const seatName = document.createElement('p');
      seatName.innerText = seat.id;
      console.log(seatName);

      const seatClass = document.createElement('p');
      const seatPrice = document.createElement('p');
    }


    seatsSelectedDisplay = seatsSelected;

    document.querySelector('#seats-left').innerText = totalSeatsAvailable;

    document.querySelector('#selected-seat-count').innerText = seatsSelectedDisplay;
  });
});
