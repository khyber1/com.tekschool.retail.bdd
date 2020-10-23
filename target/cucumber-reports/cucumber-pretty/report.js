$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailTestScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Retail Test Scenarios",
  "description": "",
  "id": "retail-test-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2505823900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2871403094,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Register Account for new Retail user",
  "description": "",
  "id": "retail-test-scenarios;register-account-for-new-retail-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@RegisterForm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User fill out Register form with below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "David",
        "Khan",
        "divkhan@test.com",
        "1112228796",
        "khan123"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User select \u0027yes\u0027 for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on privacy and policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Should see message \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 45635401,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_Register()"
});
formatter.result({
  "duration": 845319009,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_fill_out_Register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 889162308,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_select_yes_for_Subscribe()"
});
formatter.result({
  "duration": 76616000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_privacy_and_policy_check_box()"
});
formatter.result({
  "duration": 39225257,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 524924957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 25
    }
  ],
  "location": "RegisterFormStepDefinition.user_Should_see_message_Your_Account_Has_Been_Created(String)"
});
formatter.result({
  "duration": 5044704265,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //h1[contains(text(),\u0027Your Account Has Been Created!\u0027)],\u0027Your Account Has Been Created!\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//h1[contains(text(),\u0027Your Account Has Been Created!\u0027)],\u0027Your Account Has Been Created!\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d86.0.4240.80)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027Khybers-MacBook-Pro.local\u0027, ip: \u00272601:140:8000:5a50:0:0:0:9a8d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.80, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/fn/gqcdslp103v...}, goog:chromeOptions: {debuggerAddress: localhost:53909}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 393c4e6c44ed8e5bc87506123ca54a1c\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Your Account Has Been Created!\u0027)],\u0027Your Account Has Been Created!\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat pageObjects.RegisterFormPageObj.getSuccessfullAccountCreationMessage(RegisterFormPageObj.java:76)\n\tat stepDefinitions.RegisterFormStepDefinition.user_Should_see_message_Your_Account_Has_Been_Created(RegisterFormStepDefinition.java:53)\n\tat ✽.Then User Should see message \u0027Your Account Has Been Created!\u0027(Features/RetailTestScenarios.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "duration": 103213512,
  "status": "passed"
});
});