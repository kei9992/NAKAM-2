bubbly({
    colorStart: '#fff',
    colorStop: '#fffe',
    blur: 1,
    compose: 'source-over',
    bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
  });