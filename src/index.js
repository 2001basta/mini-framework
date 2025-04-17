import creatElement from "./vdom/creatElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";
const creatVapp = (count) => creatElement('div', {
    attrs: {
        id: "app1",
        data: count
    },
    children: [String(count), creatElement('img', {
        attrs: {
            src: 'https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936255.jpg'
        },
        children: []
    }),
    creatElement('button', {
        attrs: {
           onclick: ()=>console.log("fffffffffffffffffffffffffff")
           ,
           id: "butt"
        },
        children: [String(count)]
    })
    ]
})

let count = 0
let vApp = creatVapp(count)
const app = document.getElementById("app")
const vdm = render(vApp)
let routApp = mount(vdm, app)
// setInterval(() => {
//     count++
//     const nApp = creatVapp(count)
//     const doChange = diff(vApp, nApp)
//     routApp = doChange(routApp)
//     vApp = nApp
// }, 1000)