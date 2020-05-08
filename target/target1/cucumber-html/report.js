$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Features/Test123.feature");
formatter.feature({
  "name": "free crm",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free crm lookup",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is lookin up",
  "keyword": "Given "
});
formatter.match({
  "location": "Definition.Mapdatatable.user_is_lookin_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken up",
  "keyword": "When "
});
formatter.match({
  "location": "Definition.Mapdatatable.user_is_taken_up()"
});
formatter.result({
  "status": "passed"
});
});