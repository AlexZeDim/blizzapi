import BlizzAPI, { BlizzAPIOptions } from './classes/BlizzAPI';

export * from './types';

export { BlizzAPIOptions };
export default BlizzAPI;

/* istanbul ignore next */
if (module) module.exports = BlizzAPI;
