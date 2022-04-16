if [-z '$1']
then 
  echo 'an environment is required to run this script'
  echo 'e.g. ./local_deploy.sh <env_name>'

else 
  echo deploying to env_name: $1
  source ~/.bash_profile
  nvm use 16
  npm install
  npm run build
  make deploy environment=$1
  make upload environment=$1

fi
