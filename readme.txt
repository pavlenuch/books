heroku login
heroku create
git init
git add .
git commit -m 'deploy'
heroku git:remote -a peaceful-stream-22280
git push heroku master