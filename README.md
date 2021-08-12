# README #

Prerequisite:

	Node
	git

	In order to get the code and install dependencies:
	git clone https://mritunjay-bst@bitbucket.org/mritunjay-bst/bst-qa.git
	cd bst-qa (project directory)
	npm install

By triggering “npm install” command, it will install all dependencies from package.json in the project.

Run tests:

	To run the tests, there are following options:
	
	npx cypress open: 
		   this will launch the test runner. Test runner contains all test files  
           from where one can select and run any particular test file or can run entire 
           tests.this will start executing the tests related to the spec file in non-headless Mode.
		   
	npx cypress run:
	       By triggering this command will start executing all tests from spec file in headless mode.


	
