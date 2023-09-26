export const carColors = [
  'Red',
  'Black',
  'White',
  'Yellow',
  'Green',
  'Blue',
  'Grey',
];

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
  marks: [
    'Mercedes',
    'BMW',
    'Renault',
    'Opel',
    'Skoda',
    'Citroen',
    'Mazda',
    'Peugeot',
    'Volkswagen',
    'Audi',
    'Daewoo',
    'Toyota',
    'Ford',
  ],
  BMW: ['316', '520'],
  Renault: ['Clio'],
  Opel: ['Astra', 'Omega'],
  Skoda: ['Octavia', 'Felicia'],
  Else: [],
  Mercedes: ['320E', '190'],
  Citroen: ['C4', 'C6', 'Xsara'],
  Mazda: ['3', '6', '5', 'Miata'],
  Peugeot: ['306', '305', '607', '3008'],
  Volkswagen: ['Golf', 'Passat', 'Touareg', 'Touran', 'Polo'],
  Audi: ['100', 'A4', 'A6', 'QQ', 'Q5', 'Q7'],
  Daewoo: ['Lanos', 'Leganza', 'Espero'],
  Toyota: ['Corolla', 'Camry', 'Avalon', 'Auris', 'Avensis'],
  Ford: ['Focus', 'Mondeo', 'Fiesta'],
};
