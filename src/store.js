import {createStore} from "vuex"
const store = createStore({
    state: {
        user: {
            id:1,
            name:"Nguyen Xuan Nhat",
            gender:"Nam",
            dateOfBirth: "12/03/2005",
            address:"Hai Duong"
        },
        users: [
            {
                id:1,
                name:"Nguyen Xuan Nhat",
                gender:"Nam",
                dateOfBirth: "12/03/2005",
                address:"Hai Duong"
            },
            {
                id:2,
                name:"Lai Hoang Nam",
                gender:"Nam",
                dateOfBirth: "12/03/2005",
                address:"Hai Duong"
            },
            {
                id:3,
                name:"Nguyen Dinh Duong",
                gender:"Nam",
                dateOfBirth: "12/03/2005",
                address:"Hai Duong"
            },
            {
                id:4,
                name:"Pham Trung Hieu",
                gender:"Nu",
                dateOfBirth: "12/03/2005",
                address:"Hai Duong"
            },
        ],
        products:[
            {
                id:1,
                name: "Cam sanh",
                price:20000,
                quantity:10
            },
            {
                id:2,
                name: "Buoi da xanh",
                price:1500,
                quantity:5
            },
            {
                id:3,
                name: "Tao",
                price:10000,
                quantity:8
            },
        ],
        count: 0,
        number: [],
        nameCompany:"RikkeiAcademy",
        acc:{
            name:"",
            password:''
        },
        darkMode:false,
        text:"Xin Chào",
    },
 
    mutations: {
        increment:(count)=>{
            count.count+=1
        },
        decrement:(count)=>{
            count.count-=1
        },
        random: (arr) => {
            arr.length = 0;
            for (let i = 0; i < 3; i++) {
                const number = Math.floor(Math.random() * 100) + 1;
                arr.push(number);
            }
        },
        changeState:(name)=>{
            name.nameCompany = "RikkeiSoft"
        },
        changeHtml(state, payload) {
            state.darkMode = payload;  
        },
        changeLanguages(state){
            state.text = "Hello"
        },
        register(state,payload){
            state.acc.name = payload.name,
            state.acc.password = payload.password
        } 
    },
    getters: {
        getUser:(user)=>{
            return user.user
        },
        getListUser:(users) => {
            return users.users
        },
        getListProduct:(product)=>{
            return product.products
        },
        getAcc:(state)=>{
            return state.acc
        }
    },
})
export default store;