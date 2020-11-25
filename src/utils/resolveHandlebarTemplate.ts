import * as fse from 'fs-extra';
import * as path from 'path';
import * as Handlebars from 'handlebars';

export const resolveHandlebarTemplate = (template: string) =>
    Handlebars.compile(
        fse
            .readFileSync(path.resolve(__dirname, 'runtime' + process.pid, template + '.hbs'), 'utf8')
            .toString()
            .trim()
    );
