pipeline {
	agent {
		docker {
			image 'node:8.2.1-alpine'
		 	label 'my-test'
			args '-p 3001:3000'
		}
	}	
	environment {
		CI = 'true'
	}
	stages {
		stage('Build') {
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
