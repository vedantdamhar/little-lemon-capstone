const availableTimesByDate = {
  '2024-02-13': ['10:00', '11:00', '12:00'],
  '2024-02-14': ['10:00', '11:00', '12:00'],
  '2024-02-15': ['14:00', '15:00', '16:00'],
  '2024-02-16': ['10:00', '11:00', '12:00'],
  '2024-02-17': ['14:00', '15:00', '16:00'],
  '2024-02-18': ['10:00', '11:00', '12:00'],
  '2024-02-19': ['14:00', '15:00', '16:00'],
  '2024-02-20': ['10:00', '11:00', '12:00'],
  '2024-02-21': ['14:00', '15:00', '16:00'],
  '2024-02-22': ['10:00', '11:00', '12:00'],
  '2024-02-23': ['14:00', '15:00', '16:00'],
  '2024-02-24': ['10:00', '11:00', '12:00'],
  '2024-02-25': ['14:00', '15:00', '16:00'],
  '2024-02-26': ['10:00', '11:00', '12:00'],
  '2024-02-27': ['14:00', '15:00', '16:00'],
  '2024-02-28': ['10:00', '11:00', '12:00'],
  '2024-02-29': ['14:00', '15:00', '16:00'],
  '2024-03-01': ['10:00', '11:00', '12:00'],
  '2024-03-02': ['14:00', '15:00', '16:00'],
  '2024-03-03': ['10:00', '11:00', '12:00'],
  '2024-03-04': ['14:00', '15:00', '16:00'],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if(availableTimesByDate[date]){
              if (availableTimesByDate[date].length > 0) {
                resolve(availableTimesByDate[date]);
              } else {
                reject(new Error(`No available times for ${date}. Please try another date.`));
              }
          }
          else{
              reject(new Error(`No available times for ${date}. Please try another date.`));
          }
      } , 300)
  })
}

const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!formData || !formData.date) {
        reject(new Error('Invalid form data. Date is missing.'));
        return;
      }

      if (!availableTimesByDate[formData.date]) {
        reject(new Error(`No available times for ${formData.date}. Please try another date.`));
        return;
      }

      availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.selectedTime);

      resolve(true);
    }, 500);
  });
};

export{fetchAPI,submitAPI}
