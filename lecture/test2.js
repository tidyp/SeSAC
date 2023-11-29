console.log(Number.isFinite(+'20'))
console.log(Number.isFinite(10/3))
console.log(Number.isInteger(10/3))
console.log(2**53-1)
console.log(2**53)
console.log(2**53+1)
console.log(2**53+2)
console.log(2**53+3)
console.log(2**53+4)
console.log(2**53+5)
console.log(41241241242143451352353243242343214)
console.log(41241241242143451352353243242343214n)

console.log(new Date())
console.log(new Date(2023, 11, 15, 0, 0, 0))
console.log(new Date(2142256980000))


const options = {dateStyle: "short",dateStyle: "long"}

console.log(new Intl.DateTimeFormat("ko"))
console.log(new Intl.DateTimeFormat("ko").format(new Date()))
console.log(new Intl.DateTimeFormat("ko", options))
console.log(new Intl.DateTimeFormat("ko", options).format(new Date()))

console.log(new Intl.NumberFormat('ko').format(12312))