pipeline {
    agent any
    tools {
        nodejs 'node20'
    }
    stages {
        stage('Build') {
            steps {
                sh 'cd client/admin & npm install'
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
