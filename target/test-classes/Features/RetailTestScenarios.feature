Feature: Retail Test Scenarios
Background:
	Given User is on Retail website
	
	
@RegisterForm
Scenario: Register Account for new Retail user
	When User click  on MyAccount
	And User click on Register
	And User fill out Register form with below information
	|firstName|lastName|email|phone|password|
	|David|Khan|divkhan@test.com|1112228796|khan123|
	And User select 'yes' for Subscribe
	And User click on privacy and policy check box
	And User click on Continue button
	Then User Should see message 'Your Account Has Been Created!'





