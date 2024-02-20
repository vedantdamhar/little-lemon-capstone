import { fetchAPI, submitAPI } from './mockAPI';

describe('Mock API Tests', () => {
  describe('fetchAPI', () => {
    it('should return available times for a valid date', async () => {
      const date = '2024-02-13';
      const availableTimes = await fetchAPI(date);
      expect(availableTimes).toEqual(['10:00', '11:00', '12:00']);
    });

    it('should reject with an error message for an invalid date', async () => {
      const date = '2024-03-05'; // Invalid date
      await expect(fetchAPI(date)).rejects.toThrowError(
        `No available times for ${date}. Please try another date.`
      );
    });
  });

  describe('submitAPI', () => {
    it('should resolve with true for successful form submission', async () => {
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        date: '2024-02-13',
        guests: 2,
        occasion: '',
        selectedTime: '10:00',
      };
      const result = await submitAPI(formData);
      expect(result).toBe(true);
    });

    it('should reject with an error for unsuccessful form submission', async () => {
      const formData = {date: undefined};
      await expect(submitAPI(formData)).rejects.toThrowError('Invalid form data. Date is missing.');
    });

    it('should remove selected time from available times after successful submission', async () => {
        const formData = {
          name: 'John Doe',
          email: 'john@example.com',
          date: '2024-02-13',
          guests: 2,
          occasion: '',
          selectedTime: '10:00',
        };
        await submitAPI(formData);
        const updatedAvailableTimes = await fetchAPI(formData.date);
        expect(updatedAvailableTimes).not.toContain(formData.selectedTime);
      });
  });
});
