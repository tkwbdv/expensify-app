const moment = require.requireActual("moment");

test("dummy test, so we don't get an error", () => { });

export default (timestamp = 0) => {
  return moment(timestamp);
};