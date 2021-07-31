npm init -y

npm i web-push

#get vapidKyes
node push.js

git init

git remote add origin https://github.com/rommilg/push.git

#create file
#.girignore node_modules

git add .

git status

git commit -m "initial"

git push origin master -u

npm i netlify-cli -g

npm netlify deploy

#מייצר קוד
node push.js