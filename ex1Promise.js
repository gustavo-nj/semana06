
const numero = 3;

const numeroPar = new Promise ((resolve, reject) => {
    if (numero % 2 === 0) {
        return resolve(`o número: ${numero}, é par`);
    } else {
        return reject (`O número: ${numero}, é impar`);
    }
    
});
    
numeroPar
.then((result)=> console.log(result))
.catch((erro) => console.log(erro))