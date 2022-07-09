const numbers = [10, 20, 30, 40]

for (let value of numbers) {
  console.log (value) // 10, 20, 30, 40
}

for (let index in numbers) {
    console.log (index) // 0, 1, 2, 3
    
    console.log(numbers[index]) // 10, 20, 30, 40
  }