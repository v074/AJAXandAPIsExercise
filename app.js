// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
// Answer
const jokeJS1=JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
p1.innerText=jokeJS1.setup;
p2.innerText=jokeJS1.punchline;
// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
// Answer
axios.get(`https://official-joke-api.appspot.com/jokes/random`)
.then(res=>{
    const jokeJS2=res;
    p3.innerText=jokeJS2.data.setup;
    p4.innerText=jokeJS2.data.punchline;
})
.catch(err=>{
    console.log(err);
});
// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
// Answer
async function jokeFunc(){
    try{
        const jokeJS3=await axios.get(`https://official-joke-api.appspot.com/jokes/random`);
        console.log(jokeJS3.data);
        p5.innerText=jokeJS3.data.setup;
        p6.innerText=jokeJS3.data.punchline;
    }
    catch(err){
        console.log(err);
    }
}
jokeFunc();
// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
// Answer
const id = `38963`;
const season = `1`; 
const number = `8`;
async function tvMazeFunc(){
    try{
        const mando=await axios.get(`http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${number}`);
        p7.innerText=mando.data.name;
    }
    catch(err){
        console.log(err);
    }
}

tvMazeFunc();

// BONUS (5):
const body=document.querySelector(`body`);
const pokeImg=document.createElement(`img`);
body.append(pokeImg);
async function pikaFunc(){
    try{
        pikaData=await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        pokeImg.src=pikaData.data.sprites.front_default;
    }
    catch(err){
        console.log(err)
    }
}
pikaFunc();