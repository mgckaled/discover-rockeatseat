// call back function - uma função passada como um parâmetro numa outra função

function sayMyName(name) {
  console.log(name);
}

sayMyName({name: 'Marcel'})

sayMyName(
  () => {
    console.log('Estou em uma call back');
  }
)

