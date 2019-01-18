node {

   stage ('Clean') {
	   deleteDir()
   }

   stage ('Checkout') {
	   git branch: 'master', url: 'https://github.com/Sun-Raise/Jenkins_pipeline.git'
	   sh 'whoami'
	   sh 'ls -ltr /var/lib/jenkins/workspace/pipeline_test'
   }
						
   stage ('Build') {
       sh 'chmod 755 /var/lib/jenkins/workspace/pipeline_test/deploy.sh'
       sh 'sh /var/lib/jenkins/workspace/pipeline_test/deploy.sh'
	   echo "Build Completed"
   }
}
