#!/usr/bin/env groovy

try{
	node('master') {
		checkout("https://github.com/carlogilmar/Ember-Basic-Workshop.git", "master")
	}
} catch(caughtError) {
    currentBuild.result = "FAILURE"
}


def checkout(repo, branch) {
    stage('Checkout'){
        checkout([
                    $class: 'GitSCM',
                    branches: [[name: branch]],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [
                                        [
                                            credentialsId: 'github',
                                            url: repo
                                        ]
                                       ]
                 ])
    }
}

