$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Features/Test123.feature");
formatter.feature({
  "name": "free crm",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free Crm Loginn Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Definition.Test123.userIsAlreadyInTheLoginPage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.fail(Assert.java:103)\r\n\tat Definition.Test123.userIsAlreadyInTheLoginPage(Test123.java:26)\r\n\tat ✽.user is already in the login page(file:///E:/NoticeperiodSelenium/cucumberreports/src/main/java/Features/Test123.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "title of the lgin page is free CRmm",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.Test123.titleOfTheLoginPageIsFreeCRmm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.Test123.userEnterUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.Test123.userClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is home page",
  "keyword": "And "
});
formatter.match({
  "location": "Definition.Test123.userIsHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("krishnauppara");
formatter.embedding("image/png", "embedded0.png", "Free Crm Loginn Test Scenario");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Free crm lookup",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is lookin up",
  "keyword": "Given "
});
formatter.match({
  "location": "Definition.Test123.user_is_lookin_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken up",
  "keyword": "When "
});
formatter.match({
  "location": "Definition.Test123.user_is_taken_up()"
});
formatter.result({
  "status": "passed"
});
formatter.write("krishnauppara");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/Features/mapdatatable.feature");
formatter.feature({
  "name": "Verify the datatable",
  "description": "description ::: ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the datatable",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "xyxz",
  "keyword": "Given "
});
formatter.match({
  "location": "Definition.Mapdatatable.xyxz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "abc",
  "keyword": "When "
});
formatter.match({
  "location": "Definition.Mapdatatable.abc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "def",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.Mapdatatable.def(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.write("krishnauppara");
formatter.after({
  "status": "passed"
});
});