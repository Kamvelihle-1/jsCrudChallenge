let blogTitle=document.querySelector('#title-name')
let blogDescription=document.querySelector('#description')
let blogContent=document.querySelector('#content')
let image = document.querySelector('#image-url')
let btnAddContent=document.querySelector('.btn-add')
let table = document.querySelector('#tbl-admin')
let btnDelete =document.querySelector('.btn-delete')
let btnEdit = document.querySelector('.btn-edit')
let btnAdd =document.querySelector('#add')
let model = document.querySelector('#blogModel')

let blogData=JSON.parse(localStorage.getItem('blog-list'))?JSON.parse(localStorage.getItem('blog-list')):[];

let itemId = blogData[blogData.length-1] ? blogData[blogData.length-1].id + 1: 1;
let deleteButtons;
let editButtons;

btnAddContent.addEventListener('click',()=>{
    addBolgs()
})

// Validation and code run function
function addBolgs() {
    
    if (isNaN(blogTitle.value) && isNaN(blogContent.value) && isNaN(blogDescription.value) && isNaN(image.value)){
        switch (true) {
           
            case !blogTitle.value:
                alert("Please enter a title")
                break;
            case !blogContent.value:
                alert("Please enter content")
                break;

            case !blogDescription.value:
                alert("Please enter a description")
                break;

            case !image.value:
                alert("Please enter image url")
                break;
            
            default:
             
                blogData.push({
                    id:itemId,
                    title:blogTitle.value,
                    image:image.value,
                    description:blogDescription.value,
                    content: blogContent,
                    date: new Date()
                   
                })
                console.log(blogData);
                count.push(itemId)
                console.log(blogData[itemId].id == itemId)
                itemId++
               
                clear()
                localStorage.setItem("blog-list",JSON.stringify(blogData))
                output()
                input.value=""
                break;
    
    
        }
        
    } 
    
   
}

function display(){
    blogData=JSON.parse(localStorage.getItem('blog-list)
    blogData.foreach( item =>{
     table.innerHTML +=                                        
       `
       <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td><a href="${item.image}"></td>
            <td>${item.description}</td>
            <td>${item.content}</td>
            
       </tr>
       `
                                             
                                             })                                         
}

   
