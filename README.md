# online-movie-store
A full stack movie store allows user signup, login, adding items to shopping cart, checkout and administration.

### Configure using MAMP
### Import data using create_movie_store.sql


### User’s available function:

Guest user: seeing all the movie’s list, searching specific movie by name, filter the result by category, see the detail of a specific movie, register with validated user name, email and password.

 Regular user: log in with registered username/email and password, add to and remove movie from shopping cart and check out, see the purchase history, log off.

Admin user: log in with registered username/email and password which added into admin table of database by database administrator, add new movie (including upload movie picture and summery), update exist movie with new content or delete exist movie (soft delete: mark the isDeleted attribute in movie table as 1 which default 0.), log off.


### Homepage overview
![1](https://cloud.githubusercontent.com/assets/9277856/25505589/1b1cdbd4-2b68-11e7-83b2-a4748cf17e4b.png)
