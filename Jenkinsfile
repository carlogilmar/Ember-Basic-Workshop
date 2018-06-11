pipeline {

  agent any

  stages {
    stage('Stage 1') {
      steps {
        echo 'Hi!'
      }
    }
    stage('Stage 2') {
      steps {
        echo "Step Dos !!"
        echo "Step tres !!"
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }

}
