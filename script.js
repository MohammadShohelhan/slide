// const slides = document.querySelectorAll(".slide");
// console.log(slides);

// let count = 1;
// setInterval(() => {
//   count++

//  let shohel = document.querySelector(".current");

//  shohel.classList.remove("current");
             

 
//  if (count > slides.length) {
//            slides[0].classList.add("current");
          
//  } else {
//   shohel.nextElementSibling.classList.add("current") 
//  }
 




// },2000);


const all = document.querySelectorAll(".slide");

 let count = 1;
setInterval(()=> {
  const shohel = document.querySelector(".current");

  shohel.classList.remove('current');
  count++
  if (count > all.length) {
    all[0].classList.add("current");
    count= 1;
  } else {
    shohel.nextElementSibling.classList.add("current")
  }

 
},1500)

