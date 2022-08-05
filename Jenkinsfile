// 所有脚本都放在pipeline中
pipeline{
    // 指定任务在哪个集群节点中执行
    agent any

    //声明全局变量，方便后期使用
    environment {
        harborUser = 'admin'
        harborPasswd = 'Harbor12345'
        harborAddr = '39.103.66.129:9090'
        harborRepo = 'repo'
    }

    stages {
        stage('拉取git仓库代码') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '$tag']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Andrea01100011/CI-CD-test']]])
                echo '拉取git仓库代码 - SUCCESS'
            }
        }
        stage('通过maven构建项目') {
            steps {
                sh '/var/jenkins_home/maven/bin/mvn clean package -DskipTests'
                echo '构建项目 - SUCCESS'
            }
        }
        stage('通过SonarQube检测代码') {
            steps {
                sh '/var/jenkins_home/sonar-scanner/bin/sonar-scanner -Dsonar.java.binaries=./target/ -Dsonar.sources=./ -Dsonar.projectname=${JOB_NAME} -Dsoanr.login=admin -Dsonar.password=55218811Lbn -Dsonar.projectKey=${JOB_NAME}'
                echo '代码质量检测 - SUCCESS'
            }
        }
        stage('通过docker制作自定义镜像') {
            steps {
                sh '''mv ./target/*.jar ./docker/
docker build -t ${JOB_NAME}:${tag} ./docker/'''
                echo '自定义镜像制作 - SUCCESS'
            }
        }
        stage('自定义镜像推送至harbor仓库') {
            steps {
                sh '''docker login -u ${harborUser} -p ${harborPasswd} ${harborAddr}
docker tag ${JOB_NAME}:${tag} ${harborAddr}/${harborRepo}/${JOB_NAME}:${tag}
docker push ${harborAddr}/${harborRepo}/${JOB_NAME}:${tag}'''
                echo '镜像推送至harbor - SUCCESS'
            }
        }
        stage('通过publish over ssh通知目标服务器') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'laboratory', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: "deploy.sh $harborAddr $harborRepo $JOB_NAME $tag $host_port $container_port", execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                echo '通知目标服务器 - SUCCESS'
            }
        }
    }
    //钉钉机器人推送
    post {
        success {
            dingtalk(
                robot: 'Jenkins_DingDing',
                type: 'MARKDOWN',
                title: "success: ${JOB_NAME}",
                text: "[- 构建成功: ${JOB_NAME} \n- 版本: ${tag} \n- 持续时间: ${currentBuild.durationString} ]"
            )
        }
        failure {
            dingtalk(
                robot: 'Jenkins_DingDing',
                type: 'MARKDOWN',
                title: "success: ${JOB_NAME}",
                text: "[- 构建失败: ${JOB_NAME} \n- 版本: ${tag} \n- 持续时间: ${currentBuild.durationString} ]"
            )
        }
    }
}