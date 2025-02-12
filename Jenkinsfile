pipeline {
    agent any

 
    stages {
      

        stage('Install Dependencies') {
            steps {
                // Install the dependencies for your Node.js app
                script {
                    powershell 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests with npm
                script {
                    powershell 'npm test'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Tests passed!'
        }
        failure {
            echo 'Build or Tests failed.'
        }
    }
}
