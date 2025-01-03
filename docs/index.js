const basicInfo = require ('./basicinfo');
const servers = require ('./server');
const tags = require ('./tags');
const components = require ('./components');
const Omnivox = require ('./Omnivox');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...Omnivox,
}
