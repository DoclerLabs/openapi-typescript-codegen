// @ts-nocheck

import * as Handlebars from 'handlebars';

export function registerHandlebarHelpers(): void {
    Handlebars.registerHelper('equals', function (a: string, b: string, options: Handlebars.HelperOptions): string {
        return a === b ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('notEquals', function (a: string, b: string, options: Handlebars.HelperOptions): string {
        return a !== b ? options.fn(this) : options.inverse(this);
    });
}
