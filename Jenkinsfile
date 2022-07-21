pipeline {
	agent none 
	environment {
		CI = 'true'
	}
	stages {
		stage('Build') {
			agent none {
				dockerfile {
					filename 'Dockerfile'
					dir 'build'
					label 'my-test-node'
			}
				
		}
			steps {
				sh 'npm install'
			}
		}
		stage('Test') {
			steps {
				sh './jenkins/scripts/test.sh'
			}
		}
	}
}
