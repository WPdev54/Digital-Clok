setInterval(() => {
  const clock = document.getElementById("clock_output");

  let time = new Date();
  let hour = time.getHours();
  let Minute = time.getMinutes();
  let Seconds = time.getSeconds();

  if(hour > 12){
        hour = hour - 12
  }

  if(hour < 10){
    hour = "0" + hour   
  }

  if(Minute < 10){
    Minute = "0" + Minute
  }
  if(Seconds < 10){
    Seconds = "0" + Seconds
  }

  clock.textContent = hour + ":" + Minute + ":" + Seconds;
});
