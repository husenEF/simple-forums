## FLow
**RULES**
* Public Users: can see active forum, thread
* Member : 
    * can do public user do
    * can create (start) Thread
    * can reply another Thread
* Moderator:
    * can do Public User do,
    * can do Member do
    * can manage thread inside forum assigned
    * remove reply in thread
* Admin:
    * can manage everything
    * CRUD FORUM
    * CRUD Users
    * Assinge member to moderator role
  
## Feature
- [x] Migrations
- [x] Seeder
- [ ] Register
- [x] Login Authorization using JWT

## Development

* git, 
using [git flow](https://nvie.com/posts/a-successful-git-branching-model/) for development 

* Database : postgresql

* ORM :  Sequelize


## Database
```

Table Forum as F {
  id int [pk,increment]
  title Text [not NULL]
  description Text [NULL]
  status enum(active,deactive)
}

Table Thread as T {
  id int [pk, increment]
  fid int 
  uid int
  title Text [not NULL]
  description Text [NULL]
  status enum(active,deactive)
}

Table Users as U {
  id int [pk,increment]
  name varchar
  email varchar 
  username varchar
  status enum(active,deactive)
  role enum(admin,moderartor,member)
}

Table Reply as R {
  id int [pk,increment]
  uid int 
  tid int
  body Text
}

Table forum_moderator as FM {
  id int [pk, increment]
  fid int 
  uid int
}


ref : F.id < T.fid
ref : U.id < T.uid
ref : T.id < R.tid
ref : U.id < R.uid
ref : F.id < FM.fid
ref : U.id < FM.uid
```
![forum](https://user-images.githubusercontent.com/546566/118588047-dda6c080-b7c7-11eb-9082-c31bc62807a5.png)
* ORM, Sequelize

