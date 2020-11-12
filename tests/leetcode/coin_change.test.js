//reference from https://ithelp.ithome.com.tw/articles/10187599
var coinChange = function (coins, amount) {
    let dp = [];

    for (let i = 0; i <= amount; i++) {
        dp.push(Number.MAX_VALUE);
    }

    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};


test('coin change', () => {
    console.log(coinChange([186, 419, 83, 408], 6249));
});
