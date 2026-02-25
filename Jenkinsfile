pipeline {
    agent any

    tools {
        maven 'maven_3.9'
    }

    environment {
        TOMCAT_URL  = 'http://16.171.90.62:8081'
        TOMCAT_USER = 'admin'
        TOMCAT_PASS = 'admin'
        APP_NAME    = 'webapp'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                echo '✅ Code checked out successfully'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean install -DskipTests'
                echo '✅ Build successful'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
                echo '✅ Tests passed'
            }
        }

        stage('Deploy to Tomcat') {
            steps {
                sh """
                    curl -u ${TOMCAT_USER}:${TOMCAT_PASS} \
                         -T webapp/target/${APP_NAME}.war \
                         "${TOMCAT_URL}/manager/text/deploy?path=/&update=true"
                """
                echo '✅ Deployed to Tomcat successfully'
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline completed! App is live at ${TOMCAT_URL}'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above.'
        }
    }
}
