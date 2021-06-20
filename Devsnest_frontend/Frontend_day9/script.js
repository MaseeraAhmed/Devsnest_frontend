let bookedSeatsElement= document.querySelector('.booking_seats');
let remainingSeatsElement = document.querySelector('.remaining_seats');

let seats= document.querySelectorAll('.seats');
let bookedSeats =0;
let remainingSeats = seats.length;


bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = remainingSeats;

seats.forEach((seat)=> {

    seat.addEventListener('click',() => {

        seat.classList.add('.selected');
        seat.classList.toggle(".selected");
        seat.classList.contains('.selected')? bookedSeats(1) : unbookseats(-1);
    });
 });
 const bookSeats = (s) => {

    bookedSeats +=1*s;
    remainingSeats -=1*s;
    bookedSeatsElement.innerText = bookedSeats;
    remainingSeatsElement.innerText = remainingSeats;
 }