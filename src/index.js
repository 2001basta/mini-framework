import creatElement from "./vdom/creatElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";
const creatVapp = (count) => creatElement('div', {
    attrs: {
        id: "app1",
        data: count
    },
    children: ["the best man", creatElement('img', {
        attrs: {
            src: 'https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936255.jpg'
        },
        children: []
    })]
})

let count = 0
let vApp = creatVapp(count)
const app = document.getElementById("app")
const vdm = render(vApp)
let routApp = mount(vdm, app)
console.log(routApp)
// setInterval(() => {
//     count++
//     const nApp = creatVapp(count)
//     const doChange = diff(vApp, nApp)
//     routApp = doChange(routApp)
//     console.log(routApp);
    
//     vApp = nApp
// }, 4000)