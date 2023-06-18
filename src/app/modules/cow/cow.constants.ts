import {
  ICowBreed,
  ICowCategory,
  ICowLabel,
  ICowLocation,
} from './cow.interface';

export const CowLocation: ICowLocation[] = [
  'Dhaka',
  'Chattogram',
  'Rajshahi',
  'Khulna',
  'Barishal',
  'Sylhet',
  'Rangpur',
  'Mymensingh',
];

export const CowBreed: ICowBreed[] = [
  'Brahman',
  'Nellore',
  'Sahiwal',
  'Gir',
  'Indigenous',
  'Tharparkar',
  'Kankrej',
];

export const CowLabel: ICowLabel[] = ['for sale', 'sold out'];

export const CowCategory: ICowCategory[] = ['Dairy', 'Beef', 'Dual Purpose'];

export const cowSearchableFields = [
  'name',
  'age',
  'price',
  'location',
  'breed',
  'weight',
  'label',
  'category',
  'seller',
];

export const cowFilterableFields = [
  'searchTerm',
  'name',
  'age',
  'price',
  'location',
  'breed',
  'weight',
  'label',
  'category',
  'seller',
];
