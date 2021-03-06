import * as fse from 'fs-extra';
import * as path from 'path';
import * as OpenAPI from './index';

beforeAll(() => {
    fse.symlinkSync(path.resolve(__dirname, 'templates'), path.resolve(__dirname, 'utils/templates'), 'dir');
});

afterAll(() => {
    fse.unlinkSync(path.resolve(__dirname, 'utils/templates'));
});

describe('index', () => {
    it('parses v2 without issues', async () => {
        await OpenAPI.generate({
            input: './test/spec/v2.json',
            output: './generated/v2/',
            write: false,
        });
    });

    it('parses v3 without issues', async () => {
        await OpenAPI.generate({
            input: './test/spec/v3.json',
            output: './generated/v3/',
            write: false,
        });
    });

    it('downloads and parses v2 without issues', async () => {
        await OpenAPI.generate({
            input: 'https://raw.githubusercontent.com/ferdikoomen/openapi-typescript-codegen/master/test/spec/v2.json',
            output: './generated/v2-downloaded/',
            write: false,
        });
    });

    it('downloads and parses v3 without issues', async () => {
        await OpenAPI.generate({
            input: 'https://raw.githubusercontent.com/ferdikoomen/openapi-typescript-codegen/master/test/spec/v3.json',
            output: './generated/v3-downloaded/',
            write: false,
        });
    });

    it('apply templates customisation without issues', async () => {
        await OpenAPI.generate({
            input: './test/spec/v3.json',
            output: './generated/v3/',
            customTemplatesPath: './test/templates',
            write: false,
        });
    });
});
