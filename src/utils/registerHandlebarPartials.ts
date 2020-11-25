import * as Handlebars from 'handlebars';
import { resolveHandlebarTemplate } from './resolveHandlebarTemplate';

export const registerHandlebarPartials = () => {
    // Partials for the generations of the models, services, etc.
    Handlebars.registerPartial('exportEnum', resolveHandlebarTemplate('partials/exportEnum'));
    Handlebars.registerPartial('exportInterface', resolveHandlebarTemplate('partials/exportInterface'));
    Handlebars.registerPartial('exportType', resolveHandlebarTemplate('partials/exportType'));
    Handlebars.registerPartial('extends', resolveHandlebarTemplate('partials/extends'));
    Handlebars.registerPartial('header', resolveHandlebarTemplate('partials/header'));
    Handlebars.registerPartial('isNullable', resolveHandlebarTemplate('partials/isNullable'));
    Handlebars.registerPartial('isReadOnly', resolveHandlebarTemplate('partials/isReadOnly'));
    Handlebars.registerPartial('isRequired', resolveHandlebarTemplate('partials/isRequired'));
    Handlebars.registerPartial('parameters', resolveHandlebarTemplate('partials/parameters'));
    Handlebars.registerPartial('result', resolveHandlebarTemplate('partials/result'));
    Handlebars.registerPartial('schema', resolveHandlebarTemplate('partials/schema'));
    Handlebars.registerPartial('schemaArray', resolveHandlebarTemplate('partials/schemaArray'));
    Handlebars.registerPartial('schemaDictionary', resolveHandlebarTemplate('partials/schemaDictionary'));
    Handlebars.registerPartial('schemaEnum', resolveHandlebarTemplate('partials/schemaEnum'));
    Handlebars.registerPartial('schemaGeneric', resolveHandlebarTemplate('partials/schemaGeneric'));
    Handlebars.registerPartial('schemaInterface', resolveHandlebarTemplate('partials/schemaInterface'));
    Handlebars.registerPartial('type', resolveHandlebarTemplate('partials/type'));
    Handlebars.registerPartial('typeArray', resolveHandlebarTemplate('partials/typeArray'));
    Handlebars.registerPartial('typeDictionary', resolveHandlebarTemplate('partials/typeDictionary'));
    Handlebars.registerPartial('typeEnum', resolveHandlebarTemplate('partials/typeEnum'));
    Handlebars.registerPartial('typeGeneric', resolveHandlebarTemplate('partials/typeGeneric'));
    Handlebars.registerPartial('typeInterface', resolveHandlebarTemplate('partials/typeInterface'));
    Handlebars.registerPartial('typeReference', resolveHandlebarTemplate('partials/typeReference'));
    Handlebars.registerPartial('base', resolveHandlebarTemplate('partials/base'));

    // Generic functions used in 'request' file @see src/templates/core/request.hbs for more info
    Handlebars.registerPartial('functions/catchErrors', resolveHandlebarTemplate('core/functions/catchErrors'));
    Handlebars.registerPartial('functions/getFormData', resolveHandlebarTemplate('core/functions/getFormData'));
    Handlebars.registerPartial('functions/getToken', resolveHandlebarTemplate('core/functions/getToken'));
    Handlebars.registerPartial('functions/getQueryString', resolveHandlebarTemplate('core/functions/getQueryString'));
    Handlebars.registerPartial('functions/getUrl', resolveHandlebarTemplate('core/functions/getUrl'));
    Handlebars.registerPartial('functions/isBinary', resolveHandlebarTemplate('core/functions/isBinary'));
    Handlebars.registerPartial('functions/isBlob', resolveHandlebarTemplate('core/functions/isBlob'));
    Handlebars.registerPartial('functions/isDefined', resolveHandlebarTemplate('core/functions/isDefined'));
    Handlebars.registerPartial('functions/isString', resolveHandlebarTemplate('core/functions/isString'));
    Handlebars.registerPartial('functions/isSuccess', resolveHandlebarTemplate('core/functions/isSuccess'));

    // Specific files for the fetch client implementation
    Handlebars.registerPartial('fetch/getHeaders', resolveHandlebarTemplate('core/fetch/getHeaders'));
    Handlebars.registerPartial('fetch/getRequestBody', resolveHandlebarTemplate('core/fetch/getRequestBody'));
    Handlebars.registerPartial('fetch/getResponseBody', resolveHandlebarTemplate('core/fetch/getResponseBody'));
    Handlebars.registerPartial('fetch/getResponseHeader', resolveHandlebarTemplate('core/fetch/getResponseHeader'));
    Handlebars.registerPartial('fetch/sendRequest', resolveHandlebarTemplate('core/fetch/sendRequest'));
    Handlebars.registerPartial('fetch/request', resolveHandlebarTemplate('core/fetch/request'));

    // Specific files for the xhr client implementation
    Handlebars.registerPartial('xhr/getHeaders', resolveHandlebarTemplate('core/xhr/getHeaders'));
    Handlebars.registerPartial('xhr/getRequestBody', resolveHandlebarTemplate('core/xhr/getRequestBody'));
    Handlebars.registerPartial('xhr/getResponseBody', resolveHandlebarTemplate('core/xhr/getResponseBody'));
    Handlebars.registerPartial('xhr/getResponseHeader', resolveHandlebarTemplate('core/xhr/getResponseHeader'));
    Handlebars.registerPartial('xhr/sendRequest', resolveHandlebarTemplate('core/xhr/sendRequest'));
    Handlebars.registerPartial('xhr/request', resolveHandlebarTemplate('core/xhr/request'));

    // Specific files for the node client implementation
    Handlebars.registerPartial('node/getHeaders', resolveHandlebarTemplate('core/node/getHeaders'));
    Handlebars.registerPartial('node/getRequestBody', resolveHandlebarTemplate('core/node/getRequestBody'));
    Handlebars.registerPartial('node/getResponseBody', resolveHandlebarTemplate('core/node/getResponseBody'));
    Handlebars.registerPartial('node/getResponseHeader', resolveHandlebarTemplate('core/node/getResponseHeader'));
    Handlebars.registerPartial('node/sendRequest', resolveHandlebarTemplate('core/node/sendRequest'));
    Handlebars.registerPartial('node/request', resolveHandlebarTemplate('core/node/request'));
};
