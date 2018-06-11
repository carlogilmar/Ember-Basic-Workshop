pipeline {

  agent any

  stages {
    stage('Stage 1: Installation') {
      steps {
        echo 'Instalando Node'
        nodejs(nodeJSInstallationName: 'Node 10.3.0') {
          echo 'Instalando componentes de npm'
          sh 'npm install'
          sh 'npm audit fix'
          sh 'node_modules/bower/bin/bower install'
        }
      }
    }
    stage('Stage 2: Test Ember') {
      steps {
        echo "Step Dos !!"
        nodejs(nodeJSInstallationName: 'Node 10.3.0') {
          echo 'Running testing'
          sh 'pwd'
          sh 'ls -la'
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
