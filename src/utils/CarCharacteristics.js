export const carColors = [
  'Red',
  'Black',
  'White',
  'Yellow',
  'Green',
  'Blue',
  'Grey',
];

export const carMarks = [
  'BMW',
  'Mercedes',
  'Renault',
  'Opel',
  'Mitsubishi',
  'Skoda',
  'Audi',
];

export const carModels = ['Clio', 'Astra', 'Lancer'];

export const carTypes = ['Sedan', 'Coupe', 'Wagon', 'Hatchback'];

export const carFuelTypes = ['Benzin', 'Gas', 'Diesel', 'Electro'];

export const carTransmissionTypes = ['Manual', 'Automatic', 'Robot'];

function range(start, stop, step) {
  var a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
}

export const carYears = range(1960, 2023, 1);

export const marksAndModels = {
  marks: ['Mercedes', 'BMW', 'Renault', 'Opel', 'Skoda', 'Else'],
  BMW: ['316', '520'],
  Renault: ['Clio'],
  Opel: ['Astra', 'Omega'],
  Skoda: ['Octavia', 'Felicia'],
  Else: [],
  Mercedes: ['320E', '190'],
};
