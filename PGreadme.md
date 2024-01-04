npm i

npm install -g sequelize-cli

npx sequelize-cli migration:generate --name users

# copy the first file's content to the new file (at config/config.json)

npx sequelize-cli db:migrate

npm run dev