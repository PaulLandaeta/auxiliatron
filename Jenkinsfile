pipeline {
    agent any

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
