/**
 * Mock train data for the train booking component
 */
export const mockTrains = [
  {
    id: 'T1001',
    name: 'Rajdhani Express',
    number: '12301',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '16:25',
    arrival: '08:15',
    duration: '15h 50m',
    distance: '1384 km',
    price: {
      sleeper: 1200,
      ac3Tier: 2500,
      ac2Tier: 3500,
      ac1Tier: 5800
    },
    availability: {
      sleeper: 'Available',
      ac3Tier: 'WL 5',
      ac2Tier: 'RAC',
      ac1Tier: 'Available'
    },
    daysOfWeek: ['Mon', 'Wed', 'Fri', 'Sun']
  },
  {
    id: 'T1002',
    name: 'Shatabdi Express',
    number: '12002',
    from: 'New Delhi',
    to: 'Bhopal',
    departure: '06:00',
    arrival: '13:10',
    duration: '7h 10m',
    distance: '700 km',
    price: {
      chairCar: 900,
      executiveClass: 1800
    },
    availability: {
      chairCar: 'Available',
      executiveClass: 'Available'
    },
    daysOfWeek: ['Daily']
  },
  {
    id: 'T1003',
    name: 'Duronto Express',
    number: '12213',
    from: 'Mumbai Central',
    to: 'New Delhi',
    departure: '23:05',
    arrival: '16:00',
    duration: '16h 55m',
    distance: '1384 km',
    price: {
      sleeper: 1100,
      ac3Tier: 2300,
      ac2Tier: 3300,
      ac1Tier: 5600
    },
    availability: {
      sleeper: 'Available',
      ac3Tier: 'Available',
      ac2Tier: 'Available',
      ac1Tier: 'WL 3'
    },
    daysOfWeek: ['Tue', 'Thu', 'Sat']
  },
  {
    id: 'T1004',
    name: 'Vande Bharat Express',
    number: '22439',
    from: 'New Delhi',
    to: 'Varanasi',
    departure: '06:00',
    arrival: '14:00',
    duration: '8h 00m',
    distance: '759 km',
    price: {
      chairCar: 1100,
      executiveClass: 2300
    },
    availability: {
      chairCar: 'Available',
      executiveClass: 'Available'
    },
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  {
    id: 'T1005',
    name: 'Humsafar Express',
    number: '12595',
    from: 'Anand Vihar',
    to: 'Gorakhpur',
    departure: '19:45',
    arrival: '06:20',
    duration: '10h 35m',
    distance: '750 km',
    price: {
      ac3Tier: 1500
    },
    availability: {
      ac3Tier: 'Available'
    },
    daysOfWeek: ['Mon', 'Wed', 'Sat']
  }
];

/**
 * Popular route suggestions for search autocomplete
 */
export const popularRoutes = [
  { from: 'New Delhi', to: 'Mumbai Central' },
  { from: 'Bengaluru', to: 'Chennai' },
  { from: 'Kolkata', to: 'New Delhi' },
  { from: 'Mumbai Central', to: 'Ahmedabad' },
  { from: 'Chennai', to: 'Hyderabad' },
  { from: 'Lucknow', to: 'New Delhi' }
];

/**
 * List of major cities for station suggestions
 */
export const stations = [
  'New Delhi', 'Mumbai Central', 'Chennai Central', 'Kolkata', 'Bengaluru',
  'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow', 'Chandigarh',
  'Bhopal', 'Patna', 'Guwahati', 'Bhubaneswar', 'Kochi', 'Varanasi',
  'Jammu', 'Gorakhpur', 'Amritsar', 'Anand Vihar'
];
