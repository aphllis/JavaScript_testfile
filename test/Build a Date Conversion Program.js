const currentDate=new Date();
const currentDateFormat=`Current Date and Time: ${currentDate}.`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date){
  const formatDate=date.toLocaleDateString('en-US');
  return `Formatted Date (MM/DD/YYYY): ${formatDate}`
}

function formatDateLong(date){
  const formatDate=date.toLocaleDateString('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric'
  });
  return `Formatted Date (Month Day, Year): ${formatDate}`

}