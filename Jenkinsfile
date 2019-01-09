pipeline {
    options {
    }
    agent any
    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
                echo 'Cleeanup done'
				}
            }
        }
	
        stage('CheckOut the code') {
            steps {
                checkout scm
                script {
                    gitInfo = getGitInfo()
                    echo "the changed owner is ${gitInfo.git_author}"
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building the job"
                script {
                    echo " Building done successfully"
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo "Testing done successfully" 
                }
            }
        }
    }
