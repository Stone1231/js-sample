function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("done");
    }, interval);
  });
}

test("async比較慢", async () => {
  await timeoutPromise(2000);
  await timeoutPromise(2000);
  await timeoutPromise(2000);
}, 30000);

test("async比上面快,跟C#一樣", async () => {
  const s1 = timeoutPromise(2000);
  const s2 = timeoutPromise(2000);
  const s3 = timeoutPromise(2000);
  await s1;
  await s2;
  await s3;
}, 30000);

test("await Promise.all", async () => {
  const data = await Promise.all([
    timeoutPromise(2000),
    timeoutPromise(2000),
    timeoutPromise(2000),
  ]);
  console.log("data", data);

  const [res1, res2, res3] = await Promise.all([
    timeoutPromise(2000),
    timeoutPromise(2000),
    timeoutPromise(2000),
  ]);
  console.log("res1", res1);
}, 30000);

test('await fetch apis', () => {
  const r1 = fetch('http://www.api1.com');
  const r2 = fetch('http://www.api2.com');
  const r3 = fetch('http://www.api3.com');

  const j1 = await (await r1).json();
  const j2 = await (await r2).json();
  const j3 = await (await r3).json();
});
