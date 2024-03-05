const getUserInfo = async () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            const usuario = {
                nome: 'Daniel',
                idade: 27,
                email: 'daniel@gmail.com'
            };
        resolve(usuario)
        }, 2000);
    });
};

const dadosUsuario = async () => {
    try {
        const usuario = await getUserInfo();
        console.log (usuario)
    } catch (error) {
        console.log ('Erro para obter as informações do Usuário', error)
    }
};

dadosUsuario();