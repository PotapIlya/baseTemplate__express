import { Command } from 'commander';
import { templateController } from './templates/controller';
import { routeController } from './templates/route';
import * as fs from 'fs';

interface ICommand {
    controller?: string,
}

class Console {

    constructor() {
        console.log('Start console...');

        Console.createFile(Console.initConsole());
        console.log('End console...');
    }
    private static initConsole() : ICommand {
        const program = new Command();
        program
            .option('-c, --controller <type>', 'Controller name')
            .addHelpText('after', `Пример: node app.js -p res/function -n fileName -a potap -v PIRS-2-XXX`);

        program.parse(process.argv);
        return program.opts();
    }

    private static createFile(commands: ICommand){
        const lengthCommandController: number = commands.controller.split('/').length;
        const fileName: string = lengthCommandController ? commands.controller.split('/')[lengthCommandController-1] : commands.controller

        // create controller
        fs.writeFileSync(`controllers/${commands.controller}Controller.ts`, templateController({
            fileName
        }))
        // create route
        Promise.resolve(
            fs.writeFileSync(`router/${fileName}.ts`, routeController({
            path: commands.controller,
            fileName
        }))).then(() => {
            // update route
            let data : string = fs.readFileSync('./router/index.ts', {
                encoding:'utf8'
            }).replace('//add', `\n${fileName}, //add`);

            data = `import { router as ${fileName} } from './${fileName}';\n` + data

            fs.writeFileSync(`./router/index.ts`, data)
        })
    }

}

new Console();
