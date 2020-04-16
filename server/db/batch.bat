use chatterbox;

Create table users (id int primary key auto_increment, username varchar(255));

Create table rooms(id int primary key auto_increment, name varchar(225));

Create table messages(id int primary key auto_increment, userId int, roomId int, text varchar(255), createdAt int, foreign key (roomId) references users(id), foreign key (userId) references rooms(id));


Create table friends( userId int, friendId int, foreign key (userId) references users(id), foreign key (friendId) references users(id));