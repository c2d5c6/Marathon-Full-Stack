const fs = require('fs');

module.exports = class {
    dir = 'tmp';

    constructor(name) {
        if (name.includes('')) {
            this.name = name;
        } else {
            this.name = name + '.txt';
        }
        // name.includes('.txt') ? this.name = name : this.name = name + '.txt';
        this.filePath = this.dir + '/' + this.name;
    }

    create() {
        // accessSync - используется для синхронной проверки прав
        // доступа к данному файлу или каталогу.
        // mkdirSync - используется для синхронного создания каталога.
        // Принимает параметры пути к файлу и записываемые данные. 
        try {
            fs.accessSync(this.dir, fs.constants.R_OK);
        } catch (err) {
            fs.mkdirSync(this.dir);
        }

        fs.writeFile(this.filePath, '', (err) => {
            if (err) console.log(err);
        });
    }

    write(content) {
        // accessSync - используется для синхронной проверки прав
        // доступа к данному файлу или каталогу. 
        try {
            fs.accessSync(this.filePath, fs.constants.R_OK);
        } catch (err) {
            this.create();
        }

        // openSync - это встроенный интерфейс прикладного программирования модуля fs,
        // который используется для возврата целочисленного значения,
        // представляющего дескриптор файла.
        try {
            const fd = fs.openSync(this.filePath, 'a+'); // если файл не существует, создайте его
        } catch (err) {
            console.error(err);
        }

        // appendFileSync - используется для синхронного 
        // добавления заданных данных в файл. Новый файл создается,
        // если он не существует.
        try {
            const data = fs.appendFileSync(this.filePath, content);
        } catch (err) {
            console.error(err);
        }
    }

    read() {
        // readFileSync - может читать файлы синхронным способом, node.js 
        // блокирует другие параллельные процессы и выполняет текущий процесс чтения файла.
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return data ? data : 'File is Empty!';
        } catch (err) {
            console.error(err);
        }
        return 'No file information';
    }

    delete() {
        // rmSync - исользуетсся для для синхронного удаления файла по заданному пути.
        try {
            fs.accessSync(this.filePath, fs.constants.R_OK);
            fs.rmSync(this.filePath);
        } catch (err) {
            console.error(err);
        }
    }
}