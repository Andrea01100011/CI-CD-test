pipeline {
	agent {
		dockerfile {
			filename 'Dockerfile'
		 	label 'my-test-node'
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
