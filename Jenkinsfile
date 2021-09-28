node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("hbobka/docker-jenkins")
    }

    stage('Test image') {
        app.inside {
            sh 'npm test'
        }
    }

    stage('Push image') {
        /* pushing the image to docker hub with 2 tags */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}