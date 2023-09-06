pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd client && cd admin && cd npm install'
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
