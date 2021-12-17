const fs = require ('fs');

//writing files
const writeFile = FileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/README.md', fileContent, err => {
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'READMe has been Created!'
            });
        });
    });
};

module.exports = {writeFile};