let c = document.getElementById('draw');
let ctx = c.getContext('2d');
c.height = window.innerHeight;
c.width = window.innerWidth;

// ctx.strokeStyle = 'red'
// // ctx.strokeRect(0, 0, 200, 200 )
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';



// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(300, 100)
// ctx.lineTo(300, 200)
// ctx.closePath()
// ctx.strokeStyle = 'blue'
// ctx.lineWidth = 12;
// ctx.fillStyle = 'red'
// ctx.fill()
// ctx.stroke();



// pora box ar jonno..
ctx.fillStyle = '#7A86D2'
ctx.fillRect(50, 50, 900, 400);
ctx.lineWidth = 20
ctx.strokeStyle = 'green'
ctx.strokeRect(45, 45, 900, 410);





// 1st red 3 kona chhad..
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 100)
ctx.lineTo(300, 200)
ctx.closePath()
ctx.strokeStyle = 'blue'
ctx.lineWidth = 7;
ctx.fillStyle = 'red'
ctx.fill()
ctx.stroke();



// 1st yellow 4 kona gor
ctx.fillStyle = 'yellow'
ctx.fillRect(110, 203, 180, 150)
ctx.lineWidth = 10
ctx.strokeRect(108, 200, 182, 150)



// 1st 4 kona black door..
ctx.fillStyle = "#000"
ctx.fillRect(200, 245, 70, 100)
ctx.strokeStyle = "blue"
ctx.lineWidth = 6
ctx.strokeRect(200, 245, 73, 100)




// 1st 4 kona white windor
ctx.fillStyle = "#fff"
ctx.fillRect(120, 260, 60, 60)
ctx.strokeStyle = "blue"
ctx.lineWidth = 6
ctx.strokeRect(120, 260,60, 60)


ctx.beginPath();
ctx.moveTo(123, 290);
ctx.lineTo(177, 290)
ctx.strokeStyle = 'green'
ctx.stroke()


ctx.beginPath();
ctx.moveTo(150, 263);
ctx.lineTo(150, 318)
ctx.strokeStyle = '#f0f'
ctx.stroke()







//2nd 3 kona red chhad..
ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(650, 100)
ctx.lineTo(800, 200)
ctx.closePath()
ctx.strokeStyle = 'yellow'
ctx.lineWidth = 7;
ctx.fillStyle = 'red'
ctx.fill()
ctx.stroke();





// 2nd 4 kona green ghor
ctx.fillStyle = 'green'
ctx.fillRect(520, 203, 265, 150)
ctx.lineWidth = 10
ctx.strokeStyle = 'yellow'
ctx.strokeRect(520, 205, 266, 150)






// 2nd 4 kona blue door...
ctx.fillStyle = "blue"
ctx.fillRect(600, 245, 110, 100)
ctx.strokeStyle = "yellow"
ctx.lineWidth = 6
ctx.strokeRect(600, 245, 110, 104)



