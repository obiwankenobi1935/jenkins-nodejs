pipeline {
    agent any

    // environment {
    //     NODE_HOME = tool name: 'NodeJS', type: 'NodeJS' // You must configure the NodeJS tool in Jenkins
    //     PATH = "${NODE_HOME}/bin:${env.PATH}"
    // }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git 'https://github.com/obiwankenobi1935/jenkins-nodejs.git'
            }
        }

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
