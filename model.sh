npx sequelize-cli model:generate --name User \
--attributes username:string,email:string,status:enum,role:enum,password:text --underscored

npx sequelize-cli model:generate --name Forum \
--attributes title:string,description:text,thumbnail:text,status:enum --underscored

npx sequelize-cli model:generate --name Thread \
--attributes forum_id:integer,user_id:integer,title:text,description:text,status:enum --underscored

npx sequelize-cli model:generate --name Reply  \
--attributes user_id:integer,thread_id:integer,body:text,status:enum --underscored

npx sequelize-cli model:generate --name ForumModerator  \
--attributes user_id:integer,forum_id:integer --underscored