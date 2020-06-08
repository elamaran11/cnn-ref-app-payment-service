pipeline {
  agent {
    label 'maven'
  }  
  environment {
    APP_NAME = "payment-service"
    VERSION = readFile('version').trim()
    DOCKER_REPO = "${env.DOCKER_REGISTRY_URL}/${env.APP_NAME}"
    TAG = "${env.VERSION}"
  }
  stages {
    stage('Docker build') {
      steps {
        container('docker') {
          sh "docker build -t ${env.DOCKER_REPO} ."
          sh "docker tag ${env.DOCKER_REPO} ${env.DOCKER_REPO}:${env.TAG}"
        }
      }
    }
    stage('Docker push to registry'){
      steps {
        container('docker') {
//Remove          withDockerRegistry([ credentialsId: "registry-creds", url: "" ]) {
            sh "docker push ${env.DOCKER_REPO}:${env.TAG}"
//Remove          }
        }
      }
    }
  }
}

