#!/usr/bin/env groovy

try{
	node('master') {
		checkout("git@github.com:says33/myFirstAppRails.git", "master")
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

