const Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyKhpM0aQNW07lrC'
});
export const base = Airtable.base('appC3eCWo7D9tWXqU');