// let word = "dog"
// let val = ""

// for(let i = 0; i < word.length; i++){
//     val = val + word[i];
//     console.log(val);
//     if(word.length == 1){
//         break
//     } else if ((i + 1) == word.length ) {
//         word = word.slice(1);
//         i = -1;
//         val = "";
//     }
    

// }




// 9.
// Дан массив: 
// [
//   {title: 'Samsung S20', price: 1000}, 
//   {title: 'Samsung A31', price: 200}, 
//   {title: 'Samsung S10', price: 600}, 
//   {title: 'Xiaomi Mi 10', price: 400}, 
//   {title: 'Xiaomi Redmi 8', price: 300}, 
//   {title: 'iPhone 13', price: 1100}, 
//   {title: 'iPhone 11', price: 800}
// ],
// задача: реализовать след. методы; Сортировка по цене: запросить у пользователя диапазон цен от и до(необходимо получить информацию за один запрос) затем найти подходящие товары и вывести пользователю в формате: Название товара - цена, также должен быть метод для поиска товаров по названию(методы массивов)



// let arr = [ 
//     {title: 'Samsung S20', price: 1000},  
//     {title: 'Samsung A31', price: 200},  
//     {title: 'Samsung S10', price: 600},  
//     {title: 'Xiaomi Mi 10', price: 400},  
//     {title: 'Xiaomi Redmi 8', price: 300},  
//     {title: 'iPhone 13', price: 1100},  
//     {title: 'iPhone 11', price: 800}, 
//     {title: 'iPhone 11', price: 1800} 
//   ] 
//   // arr = arr.filter() 
//   function func(){ 
//   let choice = +prompt('выберите диапазон цен').split(' ');//['200', '1000'] 
//   let newArr = arr.filter((item) => { 
//       return item.price >= choice[0] && item.price <= choice[1] 
//   }) 
//   for(i of newArr){ 
//       console.log(`${i.title} - ${i.price}`); 
//   } 
//   } 

//   function elem() { 
//       let str = prompt ('Enter data of elem you want to find(title)'); 
//       let res = arr.filter(item => item.title === str); 
//       if(res.length === 0){ 
//           console.log('Товары не найдены!'); 
//       } else { 
//           for(i of res){ 
//               console.log(`Найден товар ${i.title}, по цене ${i.price}`); 
//           } 
//       } 
//   } 
//   // console.log(func()); 
//   // func() 
//   // console.log(elem); 
//   elem();


// 10.
// Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(отправить в гитхаб)

// alert dataBase = [];

// function createHero() {
//     let heroData = prompt('Enter your hero stihiya');
//     let heroLovk = +prompt('Enter your lovkost')
//     let heroSila = +prompt('enter your sila')
//     let hero = {
//         sila: heroSila,
//         lovk: heroLovk,
//         stihiya: heroData,
//     }

//     if (heroData == 'огонь') {
//         hero.sila += 20
//     } else if (heroData == 'воздух') {
//         hero.sila += 15
//     } else if (heroData == 'земля') {
//         hero.sila += 5
//     } else if (heroData == 'вода') {
//         hero.sila += 10
//     }

//     dataBase.length == 0 ? hero.name = 'Герой 1' : hero.name = 'Герой 2';
//     console.log(hero)
//     dataBase.push(hero)
// }
// createHero()
// createHero()

// function fight(arr) {
//     if (arr[0].sila > arr[1].sila) {
//         console.log(Герой 1 победил)
//     } else if (arr[0].sila < arr[1].sila) {
//         console.log(Герой 2 победил)
//     } else if (arr[0].sila == arr[1].sila) {
//         if (arr[0].lovk > arr[1].lovk) {
//             console.log('Герой 1 победил')
//         } else if (arr[0].lovk < arr[1].lovk) {
//             console.log(Герой 2 победил)
//         } else {
//             console.log('Ничья')
//         }
//     }
// }
// fight(dataBase)