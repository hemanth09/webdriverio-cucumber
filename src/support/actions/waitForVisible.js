/**
 * Wait to for element to visible
 * @param  {String}   selector  condition to fulfill
 * @param  {String}   time  wait time
 *
 */
export default (selector, time) => {
    selector.waitForVisible(time);
};
