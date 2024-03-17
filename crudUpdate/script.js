let cars = [
    { id: 1, year: 1998, engine: 1, name: 'Tico'},
    { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
    { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
    { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
    { id: 5, year: 2012, engine: 2, name: 'Malibu'},
    { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
    { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
  ];
  function updateCar(id, updatedCar) {
    const index = cars.findIndex(car => car.id === id);
    if (index !== -1) {
        cars[index] = { ...cars[index], ...updatedCar };
    }
  }
  updateCar(2, { year: 2007, name: 'Best Matiz' });
  console.log(cars);