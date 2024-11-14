// console.log("hello")
// const div=document.getElementById("demo").innerHTML = "welcome to js";
// console.dir(div);

// const div=document.getElementById("parent");
// console.dir(div);
// const h2=document.createElement("h2");
// h2.innerText="welcome to js"
// h2.style.color = "green";
// div.appendChild(h2);
// console.log(h2);

const parent=document.getElementById("root");
       const root=ReactDOM.createRoot(parent);
    // const h2=React.createElement("h2",{style:{color:"red"}},"welcome to react js");
    // root.render(h2);
    // const li1=React.createElement("li",{style:{color:"red"}},"orange");
    // const li2=React.createElement("li",{},"mango");
    // const li3=React.createElement("li",{},"banana");
    // const li4=React.createElement("li",{},"Guava");
    // const ul=React.createElement("ul",{style:{backgroundColor:"aqua"}},[li1,li2,li3,li4]);
    // root.render(ul);


// working on jsx
    // const h1=React.createElement("h1",{},"hy there");
    // const h11=<h1>Creating h1 using jsx</h1>;
    // const li1=<li>orange</li>
    // const li2=<li>mango</li>
    // const li3=<li>banana</li>
    // const li4=<li>Guava</li>
    // const ul=<ul>{li1}{li2}{li3}{li4}</ul>
    // // root.render(h11)
    // // root.render(ul)
    // const mystyle={
    //     backgroundColor : 'megenta',
    //     color : "violet", border : "4px solid red",fontSize : "40px"
    // };
    // const container=(
    //     <div style={mystyle}>
    //         <div>welcome to the application</div>
    //         <div>{ul}</div>
    //     </div>
    // )
    // root.render(container)

    const h1=React.createElement("h1",{},"hy there");
      const h11=<h1>hello world</h1>;
      root.render(h11)