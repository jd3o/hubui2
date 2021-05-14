// @Library('geomart@master') _
@Library('geomart@feature_0000_vtk1') _

pipeline {
  agent any

  environment {
    REFERER = 'xzC1fcjr0IORrXATPShhzhpyhI3wwB'
    STACKSET_NAME='jenkinstack-gis-geomartcloud-pspsv4'
    NAME = 'pspsviewer4'
  }
  
  stages {
    stage('Clone') {
      steps {
        firstStage()
      }
    }

    stage('Setup Environment variables') {
      steps {
        script {
            echo "Branch: $env.BRANCH_NAME"
            if(env.BRANCH_NAME == 'master') {
              env.DOMAINNAME = '.ss.pge.com'
            }
             // Branch hotfix
            else if (env.BRANCH_NAME.startsWith("hotfix")) {
              env.DOMAINNAME = '.nonprod.pge.com'
             }
              // Branch release
            else if (env.BRANCH_NAME.startsWith("release")) {
              env.DOMAINNAME = '.nonprod.pge.com'
             }
            // Branch feature
             else if (env.BRANCH_NAME.startsWith("feature_")) {
              env.DOMAINNAME = '.nonprod.pge.com'
            }
            else if(env.BRANCH_NAME == 'develop') {
              env.DOMAINNAME = '.nonprod.pge.com'
            }
          }
        }
      }
    
    stage('Install node dependencies of the web app') {
        steps {
        cliDockerRun("npm install", false)
      }
    }
/*
    stage('Lint') {
      steps {
        cliDockerRun("npm run lint", false)
      }
    }

    stage('Unit Tests') {
      steps {
        cliDockerRun("CI=true npm run test")
      }
    }
 */   
    stage('Build') {   
      steps {
        /* script {
          if(env.test_deploy == 'true') {
            env.BUILD = 'testing'
          }
          else {
           env.BUILD = "${ENVIRONMENT_NAME}"
          }
          */
         cliDockerRun("npm run build --env=${ENVIRONMENT_NAME}")
       // }
      }
    }
    
    stage('Create Infrastructure') {
      steps {
        script {
          uicloudformation(STACKSET_NAME)
        }
      }
    }

    stage('Deployments') {
      steps {
        cpToS3("./build", "s3://${env.FQDN}", "--recursive")
      }
    }
  }
  
  post {
    always {
      postStage() 
    }
  }
}
