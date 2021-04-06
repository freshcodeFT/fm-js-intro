"use strict";

const newsPaper = {
  title: 'FC daily',
  articles: ['Test123', 'Something', 'Nothing', 'Everything'],
  showArticles(){
    const that = this;
    this.articles.forEach(function logItem(item, index){
      console.log(that);
      console.log(`${that.title}\n№${index+1}: ${item}`);
    })
  }
}