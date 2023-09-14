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
                sh 'cd client/admin'
            }
        }
        stage('Test') {
            steps {
                sh 'cd client/admin && npm run test' 
            }
        }
        stage('Test e2e') {
            steps {
                wrap([$class: 'Xvfb', autoDisplayName: true]) {
                    sh 'cd client/admin && npm run e2e'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
