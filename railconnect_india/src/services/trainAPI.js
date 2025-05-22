import axios from 'axios';

// IRCTC API configuration
const apiConfig = {
  baseURL: 'https://irctc1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'fc336ed19cmsh85bb33b36c048d8p1c5e10jsn44538342dc79',
    'x-rapidapi-host': 'irctc1.p.rapidapi.com'
  }
};

// Create axios instance with configuration
const apiClient = axios.create(apiConfig);

/**
 * Train API service for fetching train information
 */
const trainAPI = {
  /**
   * Fetch live station data for a given train number
   * 
   * PUBLIC_INTERFACE
   * @param {string} trainNumber - The train number to track
   * @returns {Promise} - Promise resolving to train tracking data
   */
  getTrainLiveStatus: async (trainNumber) => {
    try {
      const response = await apiClient.get(`/getLiveTrainPosition?trainNo=${trainNumber}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching train status:', error);
      throw error;
    }
  },
  
  /**
   * Fetch station data for a given station code
   * 
   * PUBLIC_INTERFACE
   * @param {string} stationCode - The station code to query
   * @returns {Promise} - Promise resolving to station data
   */
  getLiveStationData: async (stationCode) => {
    try {
      const response = await apiClient.get(`/api/v3/getLiveStation?hours=1&stationCode=${stationCode}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching station data:', error);
      throw error;
    }
  },
  
  /**
   * Fetch train schedule data for a given train number
   * 
   * PUBLIC_INTERFACE
   * @param {string} trainNumber - The train number to get schedule for
   * @returns {Promise} - Promise resolving to train schedule data
   */
  getTrainSchedule: async (trainNumber) => {
    try {
      const response = await apiClient.get(`/api/v1/getTrainScheduleV2?trainNo=${trainNumber}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching train schedule:', error);
      throw error;
    }
  }
};

export default trainAPI;
