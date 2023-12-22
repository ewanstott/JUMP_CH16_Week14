//feth does same thing as axios.get()

// //GET request:
// fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`);
// axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`);

// //POST request
// fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`, { method: "POST" });
// axios.post(`https://thesimpsonsquoteapi.glitch.me/quotes`);

// //POST with headers request
// fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`, {
//   method: "POST",
//   headers: { name: "Ewan" },
// });
// axios.post(`https://thesimpsonsquoteapi.glitch.me/quotes`, {
//   headers: { name: "Ewan" },
// });

//GET request:
// fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
//   .then((data) => {
//     if (data.ok) throw data;

//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// //axios automatically triggers a try / catch block - AXIOS IS WAY MORE SIMPLE
// //When the GET request is successful, the .then() block is executed, and it takes a callback function as its argument.

// axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`).then((data) => {
//   console.log(data);
// });

//GET with async await
// async function demo() {
//   const data = await axios.get(`https://carsapp2050.fly.dev/api/v1/cars/`);
//   console.log(data);
// }
// demo();

// PUSH - add a car
async function addCar() {
  //optimistic updating (update DOM before the thing happens, on the assumption it is going to happen )
  document.getElementById("result").innerHTML = "Car Added!";

  try {
    const data = await axios.post(`https://carsapp2050.fly.dev/api/v1/cars/`, {
      avatar_url:
        "https://images.pexels.com/photos/11815958/pexels-photo-11815958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bhp: 999,
      name: "Subaru69",
    });
    console.log(data);
  } catch (e) {
    document.getElementById("result").innerHTML = "";
  }
}

document.getElementById("addCar");
addEventListener("click", () => {
  addCar();
});
