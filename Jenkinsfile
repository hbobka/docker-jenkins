node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("hbobka/docker-jenkins")
    }

    stage('Test image') {
        /* TODO: run some tests here */
        app.inside {
            sh 'echo "Tests passed"'
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