let nomeCompleto = document.querySelector('#nome-completo');
let cpf = document.querySelector('#cpf');
let email = document.querySelector('#email');

let botaoLogar =document.getElementById("botaoLogar");

let botoes = document.querySelector('.botoes');

nomeCompleto.addEventListener('blur', () => {
    if (nomeCompleto.value !== "") {
        cpf.autofocus;
        cpf.disabled = false;

    } else {
        cpf.disabled = true;
    }

})
cpf.addEventListener('blur', () => {
    if (cpf.value !== "") {
        idade.autofocus;
        idade.disabled = false;
    } else {
        idade.disabled = true;
    }
})


botaoLogar.addEventListener('click',()=> {
    if(nomeCompleto.value !== "" && cpf.value !=="" && idade.value!=="" && email.value !== ""){
        botoes.style.display="block" ;
        nomeCompleto.value=""; cpf.value="" ; idade.value="";
    }
})
function imagens(){
    let receber = document.querySelector('.receber');
    let opt = {
        method:"GET",
    }
    fetch(`https://picsum.photos/v2/list?page=2&limit=100`,opt)
    .then(contem => contem.json())
    .then(dados => {
        for(let i = 0; i < dados.length; i++){
            let img = document.createElement('img');
            img.src=`${dados[i].download_url}`;
            receber.appendChild(img);
            img.style.width="100%";
            receber.style.paddingLeft="10px";
            receber.style.paddingRight="10px";
        }
    })
    

//    img.src=""; receber.appendChild(img);
    

}
function help(){
    open(`info.txt`, '_self')
}



//<a href="downloads/html.pdf" download="downloads/html.pdf" type="downloads/html.pdf">Downloads</a>

/*
(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {id: "117", author: "Daniel Ebersole", width: 1544, height: 1024, url: "https://unsplash.com/photos/Q14J2k8VE3U", …}
1: {id: "118", author: "Rick Waalders", width: 1500, height: 1000, url: "https://unsplash.com/photos/d-Cr8MEW5Uc", …}
2: {id: "119", author: "Nadir Balcikli", width: 3264, height: 2176, url: "https://unsplash.com/photos/wE9nUW7tMmk", …}
3: {id: "12", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/I_9ILwtsl_k", …}
4: {id: "120", author: "Guillaume", width: 4928, height: 3264, url: "https://unsplash.com/photos/_DA3D5P71qs", …}
5: {id: "121", author: "Radio Pink", width: 1600, height: 1067, url: "https://unsplash.com/photos/p-bkdO43shE", …}
6: {id: "122", author: "Vadim Sherbakov", width: 4147, height: 2756, url: "https://unsplash.com/photos/xS_RzdD5CFE", …}
7: {id: "123", author: "Mark Doda", width: 4928, height: 3264, url: "https://unsplash.com/photos/tS9hJOnmKK8", …}
8: {id: "124", author: "Anton Sulsky", width: 3504, height: 2336, url: "https://unsplash.com/photos/fj0tFloTPGQ", …}
9: {id: "125", author: "Rick Waalders", width: 1500, height: 1000, url: "https://unsplash.com/photos/3HlgJNdnD7I", …}
10: {id: "126", author: "Zugr", width: 4272, height: 2511, url: "https://unsplash.com/photos/asrWX-lU3RE", …}
11: {id: "127", author: "Marcin Czerwinski", width: 4032, height: 2272, url: "https://unsplash.com/photos/rf-0DQu5M6Y", …}
12: {id: "128", author: "Matteo Minelli", width: 3823, height: 2549, url: "https://unsplash.com/photos/hlnucYOsL-c", …}
13: {id: "129", author: "Charlie Foster", width: 4910, height: 3252, url: "https://unsplash.com/photos/A88emaZe7d8", …}
14: {id: "13", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/3MtiSMdnoCo", …}
15: {id: "130", author: "Ryan Jacques", width: 3807, height: 2538, url: "https://unsplash.com/photos/ywiAen4L4qA", …}
16: {id: "131", author: "Charlie Foster", width: 4698, height: 3166, url: "https://unsplash.com/photos/yPaskTQiNjA", …}
17: {id: "132", author: "Peter Besser", width: 1600, height: 1066, url: "https://unsplash.com/photos/gq4kE8KRP8c", …}
18: {id: "133", author: "Dietmar Becker", width: 2742, height: 1828, url: "https://unsplash.com/photos/8Zt0xOOK4nI", …}
19: {id: "134", author: "Charlie Foster", width: 4928, height: 3264, url: "https://unsplash.com/photos/Osl4I3IS9Cw", …}
20: {id: "135", author: "Yuriy Khimanin", width: 2560, height: 1920, url: "https://unsplash.com/photos/o4H20aIIAt8", …}
21: {id: "136", author: "Marcin Czerwinski", width: 4032, height: 2272, url: "https://unsplash.com/photos/2wugfiddtXw", …}
22: {id: "137", author: "Vladimir Kramer", width: 4752, height: 3168, url: "https://unsplash.com/photos/xzZtV9ED5Bs", …}
23: {id: "139", author: "Steve Richey", width: 3465, height: 3008, url: "https://unsplash.com/photos/M-1MRfncLk0", …}
24: {id: "14", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/IQ1kOQTJrOQ", …}
25: {id: "140", author: "Kundan Ramisetti", width: 2448, height: 2448, url: "https://unsplash.com/photos/Acfgb7bc-Bc", …}
26: {id: "141", author: "Greg Shield", width: 2048, height: 1365, url: "https://unsplash.com/photos/v9eNihIWh8k", …}
27: {id: "142", author: "Vadim Sherbakov", width: 4272, height: 2848, url: "https://unsplash.com/photos/KSyemQIWwP8", …}
28: {id: "143", author: "Steve Richey", width: 3600, height: 2385, url: "https://unsplash.com/photos/6xqAK6oAeHA", …}
29: {id: "144", author: "Mouly Kumar", width: 4912, height: 2760, url: "https://unsplash.com/photos/TuOiIpkIea8", …}
30: {id: "145", author: "Lucas Boesche", width: 4288, height: 2848, url: "https://unsplash.com/photos/VkuuTRkcRqw", …}
31: {id: "146", author: "Florian Klauer", width: 5184, height: 3456, url: "https://unsplash.com/photos/GG0jOrmwqtw", …}
32: {id: "147", author: "Kundan Ramisetti", width: 2448, height: 2448, url: "https://unsplash.com/photos/OODWPtfXAF0", …}
33: {id: "149", author: "Guillaume", width: 3454, height: 2288, url: "https://unsplash.com/photos/revxuIor0nY", …}
34: {id: "15", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/NYDo21ssGao", …}
35: {id: "151", author: "Edoardo Loru", width: 4288, height: 3216, url: "https://unsplash.com/photos/xPfj_Kdcal4", …}
36: {id: "152", author: "Steven Spassov", width: 3888, height: 2592, url: "https://unsplash.com/photos/tVIqMgGlAG0", …}
37: {id: "153", author: "Charlie Foster", width: 4763, height: 3155, url: "https://unsplash.com/photos/xpkmxDGPz0Y", …}
38: {id: "154", author: "Christopher Sardegna", width: 3264, height: 2176, url: "https://unsplash.com/photos/x_jTtMOOMd4", …}
39: {id: "155", author: "Christopher Sardegna", width: 3264, height: 2176, url: "https://unsplash.com/photos/4f7r1LuPYj8", …}
40: {id: "156", author: "Christopher Sardegna", width: 2177, height: 3264, url: "https://unsplash.com/photos/iRyGmA_no2Q", …}
41: {id: "157", author: "koichi nakajima", width: 6211, height: 4862, url: "https://unsplash.com/photos/HFbRnCjWHsk", …}
42: {id: "158", author: "Daniel Robert", width: 4836, height: 3224, url: "https://unsplash.com/photos/MRxD-J9-4ps", …}
43: {id: "159", author: "Shyamanta Baruah", width: 5184, height: 2551, url: "https://unsplash.com/photos/kxqvE41_07k", …}
44: {id: "16", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/gkT4FfgHO5o", …}
45: {id: "160", author: "Thom", width: 3200, height: 2119, url: "https://unsplash.com/photos/Zdcq3iKly6g", …}
46: {id: "161", author: "Chloe Benko-Prieur", width: 4240, height: 2832, url: "https://unsplash.com/photos/ti4uz330CwU", …}
47: {id: "162", author: "Dillon McIntosh", width: 1500, height: 998, url: "https://unsplash.com/photos/SlGVAKyP20U", …}
48: {id: "163", author: "Linh Nguyen", width: 2000, height: 1333, url: "https://unsplash.com/photos/oFAVqfTSby8", …}
49: {id: "164", author: "Linh Nguyen", width: 1200, height: 800, url: "https://unsplash.com/photos/agkblvPff5U", …}
50: {id: "165", author: "Linh Nguyen", width: 2000, height: 1333, url: "https://unsplash.com/photos/xjXz8GKXcTI", …}
51: {id: "166", author: "Romain Briaux", width: 1280, height: 720, url: "https://unsplash.com/photos/yD3PXDV7Sjc", …}
52: {id: "167", author: "petradr", width: 2896, height: 1944, url: "https://unsplash.com/photos/WqK_xV_hbug", …}
53: {id: "168", author: "Joeri Römer", width: 1920, height: 1280, url: "https://unsplash.com/photos/Xne1N4yZuOY", …}
54: {id: "169", author: "Noel Lopez", width: 2500, height: 1662, url: "https://unsplash.com/photos/BjelfpszQDw", …}
55: {id: "17", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/Ven2CV8IJ5A", …}
56: {id: "170", author: "Noel Lopez", width: 2500, height: 1667, url: "https://unsplash.com/photos/LbS_k_c3BYA", …}
57: {id: "171", author: "Riley Briggs", width: 2048, height: 1536, url: "https://unsplash.com/photos/cSe3oKQ03OQ", …}
58: {id: "172", author: "Aleksi Tappura", width: 2000, height: 1325, url: "https://unsplash.com/photos/TQeX8khR54I", …}
59: {id: "173", author: "Linh Nguyen", width: 1200, height: 737, url: "https://unsplash.com/photos/J8k-gzI0Zy0", …}
60: {id: "174", author: "Linh Nguyen", width: 1600, height: 589, url: "https://unsplash.com/photos/YYegjUYIVeg", …}
61: {id: "175", author: "petradr", width: 2896, height: 1944, url: "https://unsplash.com/photos/8hgm6mKK04U", …}
62: {id: "176", author: "Good Free Photos", width: 2500, height: 1662, url: "https://unsplash.com/photos/WO4bxwzHRe8", …}
63: {id: "177", author: "Danka & Peter", width: 2515, height: 1830, url: "https://unsplash.com/photos/tvicgTdh7Fg", …}
64: {id: "178", author: "Thanun Buranapong", width: 2592, height: 1936, url: "https://unsplash.com/photos/JbeBraLha7U", …}
65: {id: "179", author: "Angelina Odemchuk", width: 2048, height: 1365, url: "https://unsplash.com/photos/lp0IFw6YqZg", …}
66: {id: "18", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/Ps2n0rShqaM", …}
67: {id: "180", author: "Galymzhan Abdugalimov", width: 2400, height: 1600, url: "https://unsplash.com/photos/ICW6QYOcdlg", …}
68: {id: "181", author: "Nick Turner", width: 1920, height: 1189, url: "https://unsplash.com/photos/0EjvnhOkPLM", …}
69: {id: "182", author: "Andrea Boldizsar", width: 2896, height: 1944, url: "https://unsplash.com/photos/BwgKUh9tN84", …}
70: {id: "183", author: "müllermarc", width: 2316, height: 1544, url: "https://unsplash.com/photos/k7bQqdUf954", …}
71: {id: "184", author: "Tim de Groot", width: 4288, height: 2848, url: "https://unsplash.com/photos/yNGQ830uFB4", …}
72: {id: "185", author: "Tim de Groot", width: 3995, height: 2662, url: "https://unsplash.com/photos/M_eB1UjE0do", …}
73: {id: "186", author: "Simon Pape", width: 2048, height: 1275, url: "https://unsplash.com/photos/2kc8bigeqEI", …}
74: {id: "187", author: "Andre Koch", width: 4000, height: 2667, url: "https://unsplash.com/photos/oSf8ePoG9NU", …}
75: {id: "188", author: "Wojtek Witkowski", width: 2896, height: 1936, url: "https://unsplash.com/photos/1fpyA_z2woY", …}
76: {id: "189", author: "Buzo Jesús", width: 2048, height: 1536, url: "https://unsplash.com/photos/pHM4a_RZSLE", …}
77: {id: "19", author: "Paul Jarvis", width: 2500, height: 1667, url: "https://unsplash.com/photos/P7Lh0usGcuk", …}
78: {id: "190", author: "James Forbes", width: 2048, height: 1365, url: "https://unsplash.com/photos/jrzvClypPq8", …}
79: {id: "191", author: "Alex Talmon", width: 2560, height: 1707, url: "https://unsplash.com/photos/6iat9p85VnQ", …}
80: {id: "192", author: "Adam Przewoski", width: 2352, height: 2352, url: "https://unsplash.com/photos/umchkHwkdyM", …}
81: {id: "193", author: "Vadim Sherbakov", width: 3578, height: 2451, url: "https://unsplash.com/photos/d6ebY-faOO0", …}
82: {id: "194", author: "Aleksi Tappura", width: 2000, height: 1325, url: "https://unsplash.com/photos/hVOv8me9ue8", …}
83: {id: "195", author: "Matthew Skinner", width: 768, height: 1024, url: "https://unsplash.com/photos/t05kfHeygbE", …}
84: {id: "196", author: "Dyaa Eldin Moustafa", width: 2048, height: 1536, url: "https://unsplash.com/photos/mR_HR8NZwg8", …}
85: {id: "197", author: "Kholodnitskiy Maksim", width: 4272, height: 2848, url: "https://unsplash.com/photos/n6TWNDfyPwk", …}
86: {id: "198", author: "Sylwia Bartyzel", width: 3456, height: 2304, url: "https://unsplash.com/photos/FC9mIjVT-Yw", …}
87: {id: "199", author: "Beto Galetto", width: 2592, height: 1728, url: "https://unsplash.com/photos/RL0l7Zk5PxU", …}
88: {id: "2", author: "Alejandro Escamilla", width: 5616, height: 3744, url: "https://unsplash.com/photos/N7XodRrbzS0", …}
89: {id: "20", author: "Aleks Dorohovich", width: 3670, height: 2462, url: "https://unsplash.com/photos/nJdwUHmaY8A", …}
90: {id: "200", author: "Elias Carlsson", width: 1920, height: 1280, url: "https://unsplash.com/photos/wSb8d-ke5-4", …}
91: {id: "201", author: "Craig Garner", width: 5184, height: 3456, url: "https://unsplash.com/photos/YoadQb46v6k", …}
92: {id: "202", author: "Glen Carrie", width: 2392, height: 1260, url: "https://unsplash.com/photos/xlAmGyZE7Zg", …}
93: {id: "203", author: "Diogo Tavares", width: 4032, height: 3024, url: "https://unsplash.com/photos/PFZTiiJnjag", …}
94: {id: "204", author: "Tiago Gerken", width: 5184, height: 3456, url: "https://unsplash.com/photos/vCqmY3bfqfo", …}
95: {id: "206", author: "Philipp Reiner", width: 2880, height: 1800, url: "https://unsplash.com/photos/qPJ6eRAMmCM", …}
96: {id: "208", author: "Martin Wessely", width: 2002, height: 1280, url: "https://unsplash.com/photos/NYxxuBSQzp4", …}
97: {id: "209", author: "Martin Wessely", width: 1920, height: 1280, url: "https://unsplash.com/photos/-FgZlbzZ0R8", …}
98: {id: "21", author: "Alejandro Escamilla", width: 3008, height: 2008, url: "https://unsplash.com/photos/jVb0mSn0LbE", …}
99: {id: "210", author: "Martin Wessely", width: 1920, height: 1280, url: "https://unsplash.com/photos/sX4lxBWV0-A", …}
length: 100
__proto__: Array(0)

*/