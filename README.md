# Lamborghinian
Lamborghinian is a full-stack appplication for my Phase 4 Project at Flatiron School.<br/>

## Description
Database: sqlite3<br/>
React/Rails for Front/Backend<br/>

###### Model Association:
```
Lamborghini 
  has_many :comments
  has_many :users, through: comments
  
Comment
  belongs_to :lamborghini
  belongs_to :user
  
User
  has_many :comments
  has_many :lamborghinis, through: :comments

Lamborghini <- Comment -> User
```
_Serializers are used for each model to refine JSON data for backend._<br/>

### Features
After singed in successfully, user(s) can:
- _Read / Write / Edit / Delete comment(s) on different models of Lamborghini._
- _Post up to 3 images of a Lamborghini with a description._
- _View how many comments users wrote on Lamborghinis._<br/>

## References
1. Resources from Flatiron School Software Engineering Course.
2. Publicly available articles, lectures, videos from the Internet.<br/>

## License
- [MIT](https://choosealicense.com/licenses/mit/)<br/>
- [Lamborghini Automobili](https://www.lamborghini.com/en-en/)<br/>
- All rights of images, logos and other digital resources used in this project reserved to its original creator.<br/>

## Contact
[Linkedin](https://www.linkedin.com/in/jmjkim/)<br/>
Jongmin Jack Kim jmjkim00@icloud.com
