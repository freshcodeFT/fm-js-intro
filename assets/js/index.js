"use strict";

const newsPaper = {
  title: 'FC daily',
  articles: ['Test123', 'Something', 'Nothing', 'Everything'],
  showArticles(){
    this.articles.forEach((item, index) => {
      console.log(this);
      console.log(`${this.title}\n№${index+1}: ${item}`);
    })
  }
}