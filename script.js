
let Totalprice = 0;

let totalSeatsAvailable = parseInt(document.querySelector('#seats-left').innerText);
const seats = document.querySelectorAll('.seat');
const seatNameDiplsay = document.getElementById('seat-name')
const seatClassDiplsay = document.getElementById('Seat-class')
const seatPriceDiplsay = document.getElementById('seat-price')
const couponInput = document.getElementById('coupon-field');  // Add reference to the coupon input

const maxSeats = 4;
let seatsSelected = 0;

seats.forEach(seat => {
  seat.addEventListener('click', (event) => {
    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      seat.style.backgroundColor = '';
      seatsSelected--;
      totalSeatsAvailable--;

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
      if (seatsSelected >= maxSeats) {
        alert('Max seats booked!');
        return;
      }

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
      Totalprice = seatsSelected * priceNum;

      // Update the display of the total price
      let totalPriceDisplay = document.getElementById('total-price');
      totalPriceDisplay.innerText = Totalprice;

      // Grand total calculation
      let grandTotal = document.getElementById('grand-Total');
      grandTotal.innerText = Totalprice;
    }

    seatsSelectedDisplay = seatsSelected;
    document.querySelector('#seats-left').innerText = totalSeatsAvailable;
    document.querySelector('#selected-seat-count').innerText = seatsSelectedDisplay;
  });
});

function couponButton() {
  const applyBtn = document.getElementById('coupon');
  let couponsValue = couponInput.value;  // Get the value of the coupon input
  console.log(couponsValue);

  const n = 'NEW15';
  const c = 'Couple 20';

  if (couponsValue === n || couponsValue === c) {
    // Apply the discount based on the coupon value
    let grandTotal = document.getElementById('grand-Total');
    let totalDiscountedPrice;

    // Check the coupon and apply the discount accordingly
    if (couponsValue === n) {
      // Apply 15% discount for NEW15
      totalDiscountedPrice = parseFloat(grandTotal.innerText) * 0.85;
    } else if (couponsValue === c) {
      // Apply 20% discount for Couple 20
      totalDiscountedPrice = parseFloat(grandTotal.innerText) * 0.8;

      
      couponInput.style.display = 'none';  
    }

    // Update the grand total with the discounted price
    grandTotal.innerText = totalDiscountedPrice.toFixed(2);
  } else {
    // Invalid coupon message or some other logic
    console.log('Invalid coupon code');
  }
}
