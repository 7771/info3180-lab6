Vue.component('news-list',{
    template:'
    <div class="news">
    <h2>News</h2>
    <ul class="news__list">
        <li v-for="article in articles"
        class="news__item">{{ article.title }}</li>
    </ul>
    </div>',
    create:function(){
        let self=this;
        fetch('https://newsapi.org/v2/top-headlines?
        country=us&apiKey=<your-api-key>')
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
            console.log(data);
            self.articles = data.articles;
        });
          },
            data: function() {
                return {
                    articles: []
                }
            }        
});


let app = new Vue({
    el: '#app',
    data: {
    }
    
})