node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Test image') {
        nodejs(nodeJSInstallationName: 'nodejs'){
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