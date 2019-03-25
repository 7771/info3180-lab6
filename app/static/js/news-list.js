/* Add your Application JavaScript */
Vue.component('news-list', {
    template: `
        <div class="news">
        <h2>News</h2>
            <ul class="news__list">
            <li class="news__item">News item 1</li>
            <li class="news__item">News item 2</li>
            <li class="news__item">News item 3</li>
            </ul>
        </div>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
})


let app = new Vue({
    el: '#app',
    data: {
    }
});