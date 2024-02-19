let totalSeatsAvailable = parseInt(document.querySelector('#seats-left').innerText);
const seats = document.querySelectorAll('.seat');
const seatText = document.querySelectorAll('.seat');
// console.log(seatText);

let seatsSelectedDisplay = parseInt(document.querySelector('#selected-seat-count').innerText);
// console.log(seatsSelectedDisplay);

// div id of seat class and price for displaying
let seatNameDiplsay = document.getElementById('seat-name')
let seatClassDiplsay = document.getElementById('Seat-class')
let seatPriceDiplsay = document.getElementById('seat-price')


const Totalprice = parseInt(document.getElementById('total-price').innerText)

const maxSeats = 4;
let seatsSelected = 0;


seats.forEach(seat => {
  seat.addEventListener('click', (event) => {
    if (seat.classList.contains('selected')) {

      seat.classList.remove('selected');
      seat.style.backgroundColor = '';
      seatsSelected--;
      totalSeatsAvailable++;

      // Remove the last child element from seatNameDiplsay
      const lastSeatName = seatNameDiplsay.lastChild;
      const lastSeatClass = seatClassDiplsay.lastChild;
      const lastSeatPrice = seatPriceDiplsay.lastChild;
      if (lastSeatName || lastSeatClass || lastSeatPrice) {
        seatNameDiplsay.removeChild(lastSeatName);
        seatClassDiplsay.removeChild(lastSeatClass);
        seatPriceDiplsay.removeChild(lastSeatPrice);
      }


    } else {

      // logic for max seats booked alert
      if (seatsSelected >= maxSeats) {
        alert('Max seats booked!');
        return;
      }
      // add bg green class to selected seat conut up
      seat.classList.add('selected');
      seat.style.backgroundColor = 'green';
      seatsSelected++;
      totalSeatsAvailable--;

      // create seat and display seat name
      const seatName = document.createElement('p');
      seatName.innerText = seat.innerText;
      seatName.style.paddingLeft = '30px';
      seatNameDiplsay.appendChild(seatName);

      // create seat class and display class name
      const seatClass = document.createElement('p');
      seatClass.innerText = 'Economy';
      seatClass.style.paddingLeft = '17px';
      seatClassDiplsay.appendChild(seatClass);

      // create seat price and display price value
      let seatPrice = document.createElement('p');
      let priceNum = 550;
      seatPrice.innerText = priceNum;
      let seatPriceDisplay = document.getElementById('seat-price');
      seatPriceDisplay.appendChild(seatPrice);

      // Total price calculation 
      let Totalprice = document.getElementById('total-price');
      Totalprice.innerText = seatsSelected * seatPrice.innerText;
      // console.log(Totalprice);

      // Grand total calculation
      let grandTotal = document.getElementById('grand-Total');
      grandTotal.innerText = Totalprice.innerText;



    }

    seatsSelectedDisplay = seatsSelected;
    document.querySelector('#seats-left').innerText = totalSeatsAvailable;
    document.querySelector('#selected-seat-count').innerText = seatsSelectedDisplay;
  });
});



function couponButton() {
const applyBtn = document.getElementById('coupon')
let couponsValue = document.getElementById('applie-btn');
couponsValue = couponsValue.value;
console.log(couponsValue);

}





// function showModal() {
//   // const Nav = document.getElementById('nav');
//   // const leftSide = document.getElementById('leftSIDE');
//   // const ticInfo = document.getElementById('ticket-info');
//   // const Banner = document.getElementById('banner');
//   // const Offer = document.getElementById('offer');
//   // Offer.classList.add('hidden');
//   // Nav.classList.add('hidden');
//   // Banner.classList.add('hidden')
//   // ticInfo.classList.add('hidden');
//   // leftSide.classList.add('hidden');

//   const modal = document.getElementById('modal');
//   modal.classList.remove('hidden');


// }

// function hidemodal() {
//   // const modal = document.getElementById('modal');
//   // const close = document.getElementById('close');
//   // const Nav = document.getElementById('nav');
//   // const leftSide = document.getElementById('leftSIDE');
//   // const ticInfo = document.getElementById('ticket-info');
//   // const Banner = document.getElementById('banner');
//   // const Offer = document.getElementById('offer');
//   // Offer.classList.remove('hidden');
//   // Nav.classList.remove('hidden');
//   // Banner.classList.remove('hidden')
//   // ticInfo.classList.add('hidden');
//   // leftSide.classList.remove('hidden');
//   modal.classList.add('hidden');

// }


