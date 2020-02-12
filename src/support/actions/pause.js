export default (time) => {
    /**
     * Number of milliseconds
     * @type {Int}
     */
    const intMs = parseInt(time, 10);

    browser.pause(intMs);
};
