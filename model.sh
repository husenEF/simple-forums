sequelize-cli model:generate --name User \
--attributes username:string,email:string,status:enum,role:enum,password:text --underscored

sequelize-cli model:generate --name Forum \
--attributes title:string,description:text,thumbnail:text,status:enum --underscored