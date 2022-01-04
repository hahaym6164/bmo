Technical questions
Please answer the following questions in a markdown file called Answers to technical questions.md. 
1.	How long did you spend on the coding assignment? 
  About 3 hours, 1 hours for reading and testing all the api,1.5 hours for setting up project and page layout, half hour for github,deployment and this question file.
  
  a.	What would you add to your solution if you had more time?
    
    Css styling, pagination, loading animation while requesting searching, a detail page show more info to the book.
    
  b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
   
   Css styling, pagination, loading animation while requesting searching, a detail page show more info to the book.
    
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
  I'm using javascript ES6. The most useful feature must be arrow function. I keep using it all the time.
  For example in this project 
  
    searchBooksByTitle(e) {
        e.preventDefault()
        let ip = e.target[0].value
        axios.get(url + ip).then(res => {

            this.setState({
                bookList: res.data.docs
            })
            console.log(res.data.docs, 'suc');
            return res.data.docs
        }).catch(e => console.log(e, 'error'))
     }
  
  
3.	How would you track down a performance issue in production? Have you ever had to do this?
  I would add a report button to let user report issues happened in my project.

4.	How would you improve the API that you just used?
  I will try to improve the speed when sending request.
5.	Please describe yourself using correctly formatted JSON.
{
  "name": "Ming Ying",
  "job_title":"Web Developer",
  "country": "Canada",
  "year_of_experience_in_web_development": 2,
  "sense_of_humor": "perfect",
  "is_he_a_good_person": true
}
