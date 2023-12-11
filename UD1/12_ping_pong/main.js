function pingPong() {
  for (let index = 1; index < 101; index++) {
    if (index % 10 == 0) {
      console.log(index + " PONG");
    } else if (index % 5 == 0) {
      console.log(index + " PING");
    } else {
      console.log(index);
    }
    
  }
}

pingPong();
