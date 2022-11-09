
# Repos Finder

This is a simple application which can be used to find anyone's github public Repostries. I have used github Octokit sdk to do so. It fetches 10 Repostries at a time and combined with InfiniteScroll it displays all the data .



## Run Locally

Clone the project

```bash
  git clone https://github.com/rohit27-02/repos-finder.git
```

Go to the project directory

```bash
  cd repos-finder
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```





## Screenshots
### Home page
![App Screenshot](https://i.ibb.co/bgmTSqb/Screenshot-2.png
)

### Contact page
![App Screenshot](https://i.ibb.co/XjcYyn8/Screenshot-3.png
)

### Sign in page
![App Screenshot](https://i.ibb.co/qy1WK4g/Screenshot-4.png
)

### Sign up page
![App Screenshot](https://i.ibb.co/WgdgnS4/Screenshot-5.png
)

### Sample
![App Screenshot](https://i.ibb.co/M1zkdXw/Screenshot-6.png)






## Tech Stack

**Framework:** NextJS

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** MongoDB

**Libraries:**
#### react-oauth/google : for google authentication,
#### jwt-decode : used to decode Jwt token,
#### octokit : Github sdk to access public libraries,
#### crypto-js : used for password encryption,
#### react-toastify : used for nice notifications



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`CLIENT_ID`

`CLIENT_SECRET`


## Contributing

Contributions are always welcome!


Please adhere to this project's `code of conduct`.


## Authors

- [@rohit27-02](https://github.com/rohit27-02/)


## 🛠 Skills
Javascript, HTML, CSS, MongoDB, NextJS, NodeJS, API, REST


![Logo](https://img.icons8.com/clouds/100/000000/github.png)


## Demo

https://repos-finder-teal.vercel.app/

