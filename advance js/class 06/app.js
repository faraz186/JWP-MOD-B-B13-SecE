// const API_KEY = "c0ef75261a97cb8945e927fb43a01d09";
// const input = document.getElementById("searchInput");
// const showData = document.getElementById("showData");
     
// const searchWeather = async () => {
//   const API = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`;

//   showData.innerHTML = `<div class="spinner-grow text-danger" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>`;

//   const response = await fetch(API);

//   const data = await response.json();

//   console.log(data);

//   showWeatherData(data);
// };

// const showWeatherData = (data) => {
//   showData.innerHTML = `<div>
//                 <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//             </div>
//             <div>
//                 <h1>${data.main.temp}</h1>
//                 <H2>${data.weather[0].main}</H2>
//             </div>`;
// };

// // callback

// const getData = (id, callback) => {
//   setTimeout(() => {
//     console.log(id);
//     if (callback) {
//       callback();
//     }
//   }, 3000);
// };

// getData(10, () => {
//   getData(20, () => {
//     getData(20, () => {
//       getData(20, () => {
//         getData(20);
//       });
//     });
//   });
// });

// Classes

// class Student {
//   constructor(name, age, city) {
//     this.Std_name = name;
//     this.Std_age = age;
//     this.Std_city = city;
//   }
// }

// class School extends Student {
//   constructor(institute) {
//     super(name, age, city);
//     this.institute = institute;
//     this.Std_name = name;
//     this.Std_age = age;
//     this.Std_city = city;
//   }
// }

// const institute = new School("Jawan Pakistan", "faraz", 23, "karachi");

// console.log(institute);

// const student1 = new Student("faraz", 23, "karachi");

// console.log(student1);

// function Student(name, age, city) {
//   this.Std_name = name;
//   this.Std_age = age;
//   this.Std_city = city;
// }

// const student1 = new Student("faraz", 23, "karachi");
// const student2 = new Student("faraz", 23, "karachi");
// const student3 = new Student("faraz", 23, "karachi");
// const student4 = new Student("faraz", 23, "karachi");
// const student5 = new Student("faraz", 23, "karachi");
// const student6 = new Student("faraz", 23, "karachi");
// const student7 = new Student("faraz", 23, "karachi");
// const student8 = new Student("faraz", 23, "karachi");

// console.log(student1);

// class Student {
//   constructor(name, city) {
//     this.name = name;
//     this.city = city;
//   }
// }

// class School extends Student {
//   constructor(school, name, city) {
//     super(name, city);
//     this.school = school;
//     this.name = name;
//     this.city = city;
//   }
// }

// const student1 = new School("JP", "Faraz", "lahore");

// console.log(student1);

// const student1 = new Student("faraz", "karachi");

// console.log(student1);

// const greet = () => {
//   return "Hello Students";
// };

// let obj = {
//   name: "faraz",
//   age: 23,
//   email: "faraz@gmail.com",
// };

// export { greet };

// console.log(greet());
