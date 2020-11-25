import * as fse from 'fs-extra';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import { registerHandlebarHelpers } from './registerHandlebarHelpers';
import { registerHandlebarPartials } from './registerHandlebarPartials';
import { resolveHandlebarTemplate } from './resolveHandlebarTemplate';

export interface Templates {
    index: Handlebars.TemplateDelegate;
    exports: {
        model: Handlebars.TemplateDelegate;
        schema: Handlebars.TemplateDelegate;
        service: Handlebars.TemplateDelegate;
    };
    core: {
        settings: Handlebars.TemplateDelegate;
        apiError: Handlebars.TemplateDelegate;
        apiRequestOptions: Handlebars.TemplateDelegate;
        apiResult: Handlebars.TemplateDelegate;
        request: Handlebars.TemplateDelegate;
    };
}

/**
 * Read all default and custom Handlebar templates that we need and return on wrapper object
 * so we can easily access the templates in out generator / write functions.
 */
export function registerHandlebarTemplates(customTemplates?: string): Templates {
    const templatesDefault = path.resolve(__dirname, 'templates');
    const templatesRuntime = path.resolve(__dirname, 'runtime' + process.pid);
    // Take default templates to temporary runtime folder
    fse.copySync(templatesDefault, templatesRuntime);

    if (customTemplates) {
        // Merge custom templates provided with override of default set
        fse.copySync(path.resolve(customTemplates), templatesRuntime, { overwrite: true });
    }

    registerHandlebarHelpers();
    registerHandlebarPartials();

    // Main templates (entry points for the files we write to disk)
    const templates: Templates = {
        index: resolveHandlebarTemplate('index'),
        exports: {
            model: resolveHandlebarTemplate('exportModel'),
            schema: resolveHandlebarTemplate('exportSchema'),
            service: resolveHandlebarTemplate('exportService'),
        },
        core: {
            settings: resolveHandlebarTemplate('core/OpenAPI'),
            apiError: resolveHandlebarTemplate('core/ApiError'),
            apiRequestOptions: resolveHandlebarTemplate('core/ApiRequestOptions'),
            apiResult: resolveHandlebarTemplate('core/ApiResult'),
            request: resolveHandlebarTemplate('core/request'),
        },
    };

    fse.remove(templatesRuntime);

    return templates;
}
