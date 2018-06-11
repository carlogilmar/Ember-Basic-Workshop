pipeline {

  agent any

  stages {
    stage('Stage 1: Installation') {
      steps {
        echo 'Instalando Node'
        nodejs(nodeJSInstallationName: 'Node 10.3.0') {
          echo 'Instalando componentes de npm'
          sh 'npm install'
        }
      }
    }
    stage('Stage 2: Test Ember') {
      steps {
        echo "Step Dos !!"
        nodejs(nodeJSInstallationName: 'Node 10.3.0') {
          echo 'Running testing'
          sh 'node_modules/ember-cli/bin/ember test'
        }
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }

}
