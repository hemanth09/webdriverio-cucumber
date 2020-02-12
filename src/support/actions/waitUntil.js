/**
 * Wait to execute condition
 * @param  {String}   condition  condition to fulfill
 * @param  {String}   time  wait time
 *
 */
export default (condition, time) => {
    browser.waitUntil(() => condition, time, 'Web element you are looking for is not available.');
};
