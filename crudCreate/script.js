let cars = [
    { id: 1, year: 1998, engine: 1, name: 'Tico'},
    { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
    { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
    { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
    { id: 5, year: 2012, engine: 2, name: 'Malibu'},
    { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
    { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
];
const onCreate = (car) => {
    cars = [...cars, {id: cars.length + 1, ...car }]
}
onCreate({year: 2022, engine: 1.3, name: 'Onix'});
console.log(cars);