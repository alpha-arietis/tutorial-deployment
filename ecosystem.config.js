module.exports = {
    apps: [{
      name: 'tutorial-deployment',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-211-92-150.ap-southeast-2.compute.amazonaws.com',
        key: '~/.ssh/tutorial.pem',
        ref: 'origin/master',
        repo: 'https://github.com/alpha-arietis/tutorial-deployment.git',
        path: '/home/ubuntu/tutorial-deployment',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }