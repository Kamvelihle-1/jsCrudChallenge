let page= document.querySelector('.news')

// let blogList=JSON.parse(localStorage.getItem('blog-list'))?JSON.parse(localStorage.getItem('blog-list')):[];
let blogList=[
    {
    id:1,
    title:"BBC, British Airways, Novia Scotia Among First Big-Name Victims in Global Supply-Chain Hack",
    imageUrl:"https://i.postimg.cc/15mp0ZN4/Cloud-API-Security-Conference.jpg",
    description:"The Cl0p cybercrime gang’s hack of the MOVEit file-transfer program popular with enterprises could have widespread global impact.",
    content:"",
    date:new Date()
    },
    {
        id:1,
        title:"VMware Plugs Critical Flaws in Network Monitoring Product",
        imageUrl:"https://i.postimg.cc/15mp0ZN4/Cloud-API-Security-Conference.jpg",
        description:"VMware ships urgent patches to cover security defects that expose businesses to remote code execution attacks.",
        content:"",
        date:new Date()
        },
]

// blogList.push(blog)


blogList.forEach( (item) => {
    page.innerHTML+=
    `
    <div class="col">
        <div class="card mb-3" style="width: 500px;">
            
                <img src="${item.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated ${item.date}</small></p>
                </div>
            
        </div>
    </div>
    `
});
    

