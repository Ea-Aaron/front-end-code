import App from "./App.vue"; // 浏览器不能直接识别，需要在脚手架中使用

new Vue({
    el: '#root',
    template: `
        <App></App>
    `,
    components: { App }
})