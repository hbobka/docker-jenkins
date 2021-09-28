node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Test image') {
        def testContainer = docker.image('node:14.17.6')
        testContainer.pull()
        testContainer.inside {
            sh 'npm install --only=dev'
            sh 'npm test'
        }
    }

    stage('Build image') {
        app = docker.build("hbobka/docker-jenkins")
    }

    stage('Push image') {
        /* pushing the image to docker hub with 2 tags */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}