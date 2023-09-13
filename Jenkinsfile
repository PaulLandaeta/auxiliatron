pipeline {
    agent any
    tools {
        nodejs 'pepitoNode'
    }
    stages {
        stage('Dependencies') {
            steps {
                sh 'cd client/admin && npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'cd client/admin && npm build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
