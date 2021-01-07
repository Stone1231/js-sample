const locale = {
  en: {
    translation: {
      LOGIN: "Login",
      USER_NAME: "Username",
      PASSWORD: "Password",
    },
  },
  cn: {
    translation: {
      LOGIN: "登入",
      USER_NAME: "用户帐户",
      PASSWORD: "用户密码",
    },
  },
  tw: {
    translation: {
      LOGIN: "登入",
      USER_NAME: "使用者帳號",
      PASSWORD: "使用者密碼",
    },
  },
};

test("區分大小寫", () => {
  Object.keys(locale).map((m) => console.log(m));
});
