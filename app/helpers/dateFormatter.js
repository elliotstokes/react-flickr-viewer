// @flow

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday'];

function leftPadNumber(number: number): string {
  return ('00' + number).slice(-2);
}

/**
 * Takes a date and converts to a long date
 * @param {String} date - date in iso format
 **/
function formatLongDate(date: string): string {
  const dateObj = new Date(date);
  return months[dateObj.getMonth()] +
         ' ' +
         dateObj.getDate() +
         ' ' +
         dateObj.getFullYear() +
         ', ' +
         leftPadNumber(dateObj.getHours()) + ':' + leftPadNumber(dateObj.getMinutes());
}

const dateFormatter = {
  formatLongDate : formatLongDate
};

export {dateFormatter as default};
