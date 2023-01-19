function kabisa(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " kabisa yili");
  } else {
    console.log(year + " kabisa yili emas");
  }
}
kabisa(2000);