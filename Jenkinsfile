pipeline {
    agent any

    // environment {
    //     NODE_HOME = tool name: 'NodeJS', type: 'NodeJS' // You must configure the NodeJS tool in Jenkins
    //     PATH = "${NODE_HOME}/bin:${env.PATH}"
    // }

    stages {
      

        stage('Install Dependencies') {
            steps {
                // Install the dependencies for your Node.js app
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests with npm
                script {
                    sh 'npm test'
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
