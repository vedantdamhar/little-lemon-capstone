const availableTimesByDate = {
  '2024-02-21': ['10:00 AM', '11:00 AM'],
  '2024-02-22': ['10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM'],
  '2024-02-23': ['11:00 AM', '12:00 PM'],
  '2024-02-24': ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
  '2024-02-25': ['2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  '2024-02-26': ['10:00 AM', '11:00 AM'],
  '2024-02-27': ['2:30 PM', '3:30 PM', '4:30 PM'],
  '2024-02-28': ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'],
  '2024-02-29': ['3:00 PM', '4:00 PM'],
  '2024-03-01': ['10:00 AM', '11:00 AM', '12:00 PM'],
  '2024-03-02': ['4:30 PM', '5:30 PM'],
  '2024-03-03': ['10:00 AM', '6:00 PM', "8:00 PM"],
  '2024-03-04': ['2:00 PM', '3:00 PM'],
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
